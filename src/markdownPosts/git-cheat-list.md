---
slug: "/blog/my-personal-git-cheat-list"
id: "/blog/my-personal-git-cheat-list"
date: "2023-01-03"
title: "Git cheat list"
logo: "👌"
---


Hello, today I want to share my git cheat list that covers 90% of my everyday git usage.

### 1. If I start using git on a new PC

First of all, I change git default text editor to Notepad++.
That is how it makes on Windows OS:

```
git config --global core.editor \ "'C:/Program Files (x86)/Notepad++/notepad++.exe' - multiInst -notabbar -nosession -noPlugin"
```

### 2. Create a branch

To create a branch fast, use the "checkout -b" command on the branch you want to fork.

This command creates a new branch and checkout to it.

For example, you want to fork the master branch to a new branch named "my_new_feature":
First, you need to be on the master branch, and do this command:

```
// in the master branch:

git checkout -b my_new_feature
```


### 3. Amend a commit

Sometimes you want to fix your latest commit or commit message. In my case, I have some encoding problem with Git bash in WebStorm IDE and there are a lot of strange artifacts in the git commit message. Because of this I often fix my last commit.

This will open a text editor and you may correct your commit message, save the file and close your editor:

```
git commit --amend 
```

Or edit the commit and message in the terminal:

```
git commit --amend -m"correct message"
```

This only edits the commit and doesn't edit the commit message:

```
git commit --amend --no-edit
```

### 4. Stash - is my favorite git feature.

I work with an app that contains three web applications inside - one written with React, one with Angular, and one on native JS.
Sometimes when I start to fix some bug, I don't know there is this bug happening.

In this case, I start to fix it on the master branch on all of these apps and when I located and fixed the bug in one of three apps, I stash changes, make a bugfix branch in this repository and move new code to this branch.

```
// Now you are in the master branch 
// with some new code that needs to move to another branch.
// New changes are not committed yet.

git stash

// Now changes moved to stash.
// You need to switch to a new branch, and move changes to it:

git checkout -b bug_fix_branch_name
git stash apply stash@{0}

// Now all changes move from stash to the new branch!
// You can check changes by this command:

git status

```

### 5. Cherry-pick

Move some commit to your branch:

```
git cherry-pick <commit-hash>
```
This could be useful if your college working on the feature you need now, or if you need to add some critical changes fast.

### 6. Rebase and squash

This feature is useful if you want to make your commit history better.
For example, you have these commits in history:

- start developing some feature
- end developing some feature
- fix after code review
- fix after testing

After rebase, you can have one simple commit

- some new feature

Let's do it:

Now you have 4 commits to be rebased, let's squash it together:

```
// 4 - is the number of editing commits:

git rebase HEAD~4 -i
```

This command will open your text editor with 4 last commits, like this:

```
pick <hash> <commit message 1>
pick <hash> <commit message 2>
pick <hash> <commit message 3>
pick <hash> <commit message 4>
```
Now you should mark commits with the "squash" mark, like this:

```
pick <hash> <commit message 1>
squash <hash> <commit message 2>
squash <hash> <commit message 3>
squash <hash> <commit message 4>
```

Commit with "squash" will be merged to commit with the "pick" mark.

Important - pick commit must be later than squashed commits, in the text editor it will be upper than squashed commits.

Save and close your editor, now it will open again to write a new commit message:

```
# This is a combination of 4 commits.
# This is the 1st commit message:

<commit message 1>

# This is the commit message #2:

<commit message 2>

# This is the commit message #3:

<commit message 3>

# This is the commit message #4:

<commit message 4>
```

Now delete it all and write a new commit message:

```
Result commit message!
```
Save and close your text editor.
That's all, now you have clear git history of the feature.

You can check it:

```
git log
```

### 7. Restore
If you want to checkout to some branch fast but have some changes in the current branch.
Git doesn't let you do this:

```
error: Your local changes to the following files would be overwritten by checkout:
        <list of files were changed>
Please commit your changes or stash them before you switch branches.
Aborting
```
But if you want to checkout anywhere and don't afraid of losing changes - do this command:

```
git restore .
```

Now, all changes are deleted and you can checkout.

### 8 Short log
I like to check the git log in a short format:

```
git log --oneline
```
In this format, you can see commit messages, branches - local and remote, and HEAD. 
All commit information will be in one row.
For me, it is enough in most cases.

That's all. This is my daily cheat list that covers 90% of my needs.