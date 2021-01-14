---
title: "🛠️ Startup Series: Data Migrations"
date: "2020-12-09"
draft: true
---

data migrations common at startups
optimize for speed, flexibility, and maintainability 
simplicity -> fewer bugs
can't know the future, don't over-optimize

why do data migrations
change the data design/model

example
last saturday recurring events

originally: doc for event, doc for recur event, recur event has recur event data, use that data to display soonest occurrence of a recur event series on the front end

bottleneck:
consideration, recur events can repeat indefinitely
can't keep adding data to it
more costly to user
etc.

now: store each occurrence of a recurring event series as a document
- create events 3 months in advance
- create all the docs when 
- migrate events
- change crud

## part 1: maintenance mode

create a maintenance page
add snippet maintenance.ts

`/pages/maintenance.tsx`

redirect to it for all internal pages unless you have localstorage set
add snippet _app.tsx

```js
useEffect(() => {
	if (
		featureFlags?.maintenance_mode &&
		process.browser &&
		isInternalPage &&
		!localStorage.getItem("special-wesley-flag")
	) {
		Router.push("maintenance");
	}
}, [featureFlags]);
```

use featureflag to turn it on
add snippet featureflag
add snippet firestore database

## part 2: testing with copy of prod db (dry run)

export db
create bucket
run shell command to copy db to your workspace

`gsutil -m cp -r gs://bucket_name/folder_name ./repo_name/functions/`

use emulator and run migration
create front end button that calls backend migration cloud function

```js
const handleClick = async () => {
  	const migrateRecurringEvents = functions.httpsCallable(
    	"migrateRecurringEvents"
  	);
  	await migrateRecurringEvents();
}

return (
	...
	<PrimaryActionButton onClick={handleClick}>
		run migration
	</PrimaryActionButton>
	...
	)
```

test that everything works

## part 3. alert everybody that you are doing the migration
twitter
site banner
scheduled downtime

## part 4: do the migration

1. turn on maintenance mode
2. backup all of your documents
deploy front end code
deploy cloud function migration function
3. try to run the migration
4. 
fix bugs if don't work

if something is broken, you screw it up, delete the collection that you're migrating, import it from your backup

5. once it works, turn off the maintenance mode




thanks to dj, ish, dom,