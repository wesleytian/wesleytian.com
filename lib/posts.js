import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import toc from "remark-toc";
import commentConfig from "remark-comment-config";
import embed from "remark-embed-images";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
	// Get file names under /posts
	let fileNames = fs.readdirSync(postsDirectory);
	fileNames = fileNames.filter((fileName) => fileName.includes(".md"));
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		return {
			id,
			...matterResult.data
		};
	});

	// Don't render posts with draft in front matter set to true
	// Sort posts by date
	return allPostsData
		.filter((postData) => !postData.draft)
		.sort((a, b) => {
			if (a.date < b.date) {
				return 1;
			} else {
				return -1;
			}
		});
}

export function getAllPostIds() {
	let fileNames = fs.readdirSync(postsDirectory);
	fileNames = fileNames.filter((fileName) => fileName.includes(".md"));

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, "")
			}
		};
	});
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	// const content = matterResult.content.toString();
	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(embed)
		.use(commentConfig)
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data
	};
}
