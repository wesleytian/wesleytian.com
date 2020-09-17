import React from "react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Test from "../components/test";
import matter from "gray-matter";

const components = { Test };

export default function TestPage({ source, frontMatter }) {
	const content = hydrate(source, { components });
	return (
		<div className="wrapper">
			<h1>{frontMatter.title}</h1>
			{content}
		</div>
	);
}

export async function getStaticProps() {
	// mdx text - can be from a local file, database, anywhere
	const source = `---
title: Test
---

Some **mdx** text, with a component <Test name={title}/>
`;
	const { content, data } = matter(source);
	const mdxSource = await renderToString(content, { components, scope: data });
	return { props: { source: mdxSource, frontMatter: data } };
}
