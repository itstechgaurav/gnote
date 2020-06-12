#
#Introduction

This Package (**gnote**) is used to take notes... this is super simple Just Follow Some command and make it happen

####Contents

1. [Intro](#intro)
2. [Add notes](#add-notes)
3. [Show All Notes](#show-all-notes)
4. [Show Note Details](#show-note-details)
5. [Update Note](#update-note)
6. [Delete Note](#delete-note)

#### Intro

To get intro of the app use following command

```
gnote
```

*no **argument** needed*

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