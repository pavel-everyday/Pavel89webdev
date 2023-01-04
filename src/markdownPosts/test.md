---
slug: "/blog/my-personal-git-cheat-list"
id: "/blog/my-personal-git-cheat-list"
date: "2023-01-03"
title: "Git cheat list"
logo: "👌"
---


Hello, today I want to share my personal git cheat list that solve 90% of my everyday git usage.

### 1. If I start using git on new PC

First of all, I change git default text editor to Notepad++.
That is how it make on Windows OS:

```
git config --global core.editor \ "'C:/Program Files (x86)/Notepad++/notepad++.exe' - multiInst -notabbar -nosession -noPlugin"
```

### 2. Create a branch

To create branch fast, use checkout -b command on branch you want to fork.

This command create new branch and checkout to it.

For example you want fork master branch to new branch named "my_new_feature":
First you need be on master branch, and do this command:

```
// in master branch:

git checkout -b my_new_feature
```


### 3. Amend a commit

Sometimes you want to amend you latest commit. In my case I have some encoding problem with Git bash in WebStrom IDE and there is a lot of strange artifacts in git commit message. Because of this I often ammend my last commit.

This will open a text editor and you may correct your commit message, save file and close your editor:

```
git commit --amend 
```

Or edit commit and message in terminal:

```
git commit --amend -m"correct message"
```

This only edit commit and don't edit commit message:

```
git commit --amend --no-edit
```

### 4. Stash - my favorite git feature.

I work with app that contain three web application inside - one on React, one on Angular and one on native JS.
Some times when I start to fix some bug, I actualy don't know there is this bug happeneds.

In this case I start to fix it on master branch on all of these apps and when I located and fixed the bug in one of three apps, I stash changes, make bugfix branch in this repository and move new code to this branch.

```
// Now you are in master branch 
// with some new code that needs to move to another branch.
// New changes is not committed yet.

git stash

// Now changes moved to stash.
// You need to switch to new branch, and move changes to it:

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
This could be useful if your college working on feature you need now, or if you need to add some critical changes fast.

### 6. Rebase and squash

This feture useful if you want to make you commit history better.
For exmaple you have this commits in history:

- start develope some feature
- end develope some feature
- fix after code review
- fix after testing

Afer rebase you can have one smple commit

- some new feature

Lets do it:

Now you have 4 commits to be rebased, let's squash it together:

```
// 4 - is number of editing commits:

git rebase HEAD~4 -i
```

This command will open you text editor with 4 last commits, like this:

```
pick <hash> <commit messsage 1>
pick <hash> <commit messsage 2>
pick <hash> <commit messsage 3>
pick <hash> <commit messsage 4>
```
Now you should mark commits with "squash" mark, like this:

```
pick <hash> <commit messsage 1>
squash <hash> <commit messsage 2>
squash <hash> <commit messsage 3>
squash <hash> <commit messsage 4>
```

Commit with "squash" will be merged to commit with "pick" mark.

Important - pick commit must be later than squashed commits, in text editor it wiil be upper that squashed commits.

Save and close your editor, now it will open again to write new commit message:

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

Now delete it all and write new commit message:

```
Result commit message!
```
Save and close your text editor.
Thats all, now you have clear git history of some new feature.

You can check it:

```
git log
```

### 7. Restore
If you want to checkout to some branch fast but you have some changes in current branch.
Git don't let you do this:

```
error: Your local changes to the following files would be overwritten by checkout:
        <list od files were changed>
Please commit your changes or stash them before you switch branches.
Aborting
```
But you want to checkoput anywhere and don't afraid of loosing changes - do this command:


```
git restore .
```

Now all changes are deleted and you can checkout.


### 8 log --oneline
I like check git log in short format:

```
git log --oneline
```
In this format you can see commit messsages, branches - local and remote and HEAD. 
For me it is enough in most cases. 


Thats all. This is my daily cheat list that cover 90% of my needs.