---
title: "🛠️ Super Linux Warp Pipe"
date: "2018-07-24T00:14:49-04:00"
---

Today at work I came across a problem that I managed to solve using multiple Linux pipes. What I needed to do to solve the problem was count the frequency of words existing between a certain context.

This is a simplified version of what the input looked like:

---
	Where is the { FRUIT apple } ?
	Is the { PLANT tree } within the ground ?
	The { FRUIT banana } ate some { FRUIT banana } .
---

If I wanted to look for the frequency of words only with the `FRUIT` label, then the intended output should look like:

---
	2 banana
	1 apple
---

To prevent a breach of confidentiality, I have replaced the actual words with something else.

The command that ended up doing the trick was:

---
	cat input_file | grep -o -P '(?<={ FRUIT).*?(?= })' | grep -v "^\s$" | sort | uniq -c | sort -bnr > output_file
---


Below, I will break down what each part does. I will cover the following commands and flags: `grep -o -P -v`, `sort -bnr`, and `uniq -c`. I'll cover regular expressions (regex) in another post.

`grep -o` or `grep --only-matching` basically matches and prints out only the matched phrase. For example, since I wanted to count the number of occurrences of each of these words or phrases, I wanted to not only search for the words between `{ FRUIT`  and ` }`, but print them out.

`grep -P` or `grep --perl-regexp` is pretty self-explanatory. It allows you to specify a Perl regex.

`grep -v` or `grep --inverse-match` selects lines that don't match the regex. It's the negation of standard grep.

`uniq -c` or `uniq --count` prefixes each line with the number of occurrences of each phrase or word.

`sort -b` or `sort --ignore-leading-blanks` ignores leading blanks. Surprising.

`sort -n` or `sort --numeric-sort` sorts in ascending numerical order. (0, 1, 2, ... 9)

`sort -r` or `sort --reverse` reverses the sort.
