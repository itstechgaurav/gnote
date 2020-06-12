#
# Introduction

This Package (**gnote**) is used to take notes... this is super simple Just Follow Some command and make it happen

#### Contents

1. [Intro](#intro)
2. [Installation](#installation)
3. [Add notes](#add-notes)
4. [Show All Notes](#show-all-notes)
5. [Show Note Details](#show-note-details)
6. [Update Note](#update-note)
7. [Delete Note](#delete-note)

#### Intro

To get intro of the app use following command

```
gnote
```

*no **argument** needed*

#

#### installation

this package usesfull only if you install it globally

```
npm i -g gnote
```

use this command to install it

#

#### Add Notes

To Add Notes use Following Command

```
gnote add --title="My First Note" --body="This is my First Note"
```
##### Arguments

- ``` --title ``` *required*
- ``` --body ``` *required*

#


#### Show All Notes

To Show Notes use Following Command

```
gnote list
```
#

#### Show Note Details

To Show Details About A Single Note Use Following Command

```
gnote list --title="My First Note"
```
##### Arguments

- ``` --title ``` *required*

#

#### Update Note

To Update Note use Following Command with the ``` title ``` of the existing note

```
gnote update --title="My First Note" --body="This is my First Note"
```
##### Arguments

- ``` --title ``` *required*
- ``` --body ``` *required*

#

#### Delete Note

To Delete Note use Following Command with the ``` title ``` of the existing note

```
gnote delete --title="My First Note"
```
##### Arguments

- ``` --title ``` *required*