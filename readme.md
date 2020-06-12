#Introduction

This Package (**gnote**) is used to take notes... this is super simple Just Follow Some command and make it happen

####Contents

1. [Intro](#intro)
2. [Add notes](#add-notes)
3. [Show All Notes](#show-notes)
4. [Show Note Details](#show-note-details)
5. [Update Note](#update-note)
6. [Delete Note](#delete-note)

#### 1 - Intro {: #intro }

To get intro of the app use following command

```
gnote
```

*no **argument** needed*

#

#### 2 - Add Notes {: #add-notes }

To Add Notes use Following Command

```
gnote add --title="My First Note" --body="This is my First Note"
```
##### Arguments

- ``` --title ``` *required*
- ``` --body ``` *required*

#


#### 3 - Show All Notes {: #show-notes }

To Show Notes use Following Command

```
gnote list
```
#

#### 4 - Show Note Details {: #show-note-details }

To Show Details About A Single Note Use Following Command

```
gnote list --title="My First Note"
```
##### Arguments

- ``` --title ``` *required*

#

#### 5 - Update Notes {: #update-note }

To Update Note use Following Command with the ``` title ``` of the existing note

```
gnote update --title="My First Note" --body="This is my First Note"
```
##### Arguments

- ``` --title ``` *required*
- ``` --body ``` *required*

#

#### 6 - Delete Notes {: #delete-note }

To Delete Note use Following Command with the ``` title ``` of the existing note

```
gnote delete --title="My First Note"
```
##### Arguments

- ``` --title ``` *required*