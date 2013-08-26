# Scylla
## Introduction
Scylla detects visual changes in web pages by capturing screenshots of webpages, comparing them and then alerting the user to the specific changes. It displays the visual changes in an easy-to-explore manner, which makes it accessible to all levels of technical ability.
Scylla can serve as the first line of testing. Run immediately after a change, Scylla will allow you to immediately ensure that things changed as planned.  Run after a refactor, it will allow you to be certain things remained the same.
The built-in scheduling lets you capture screens first thing in the morning, and a summary email will let QA know if parts of the site require their attention.

## Getting Started
Scylla has two ways that you can capture and compare screenshots.

### Capturing Screenshots
#### Reports
Reports allow you to track a single URL over time. After you create a report, Scylla will immediately capture a screenshot and set that initial screen as “Master.”  By pressing the “Run Report” icon next to the report name, Scylla will capture a new screenshot and compare it against the current master. Each screenshot is listed in the Report Details, and each comparison that includes the specific screenshot is listed next to it.  To set the new “Master,” click the star next to the date that screenshot was taken. The next screenshots will be compared against the current “Master.”

#### AB Compare
Compare allows you to track the differences between two separate URLs. This is great when trying to compare a local version to a server version of a site.

### Automating Reports
The real value of Scylla is its ability to automate the visual testing. By setting up a batch of reports, you can run multiple reports at once, and even schedule the reports to run in the morning.  If you add your email address as a “Watcher” on a batch, you’ll get a summary email after each scheduled run, a handy piece of news to greet you first thing in the morning.

### Visual Diffs
Scylla’s visual diff viewer let you compare screens in two ways.

#### Difference Overlay
Scylla generates an image with all pixels that have changed in red.  We overlay this image on top of the new screenshot so that you can quickly see exactly which pixels have changed.  By adjusting the slider on the top, you can change the intensity of the red change markers.

#### Swipe
Once you’ve found where the screens have changed, you can switch to swipe mode to focus on the exact changes. In the slider view, the older, “Master” image is on the left, while the newer screenshot is on the right.  The slider will adjust a vertical seam between the images, and is a great way to see tiny adjustments in height or color that would be impossible to notice without such a tool.

## Installation
Scylla comes with a vagrant script to make setting up a local server very simple.
1) Download archive or clone git URL
2) Install [Vagrant]
3) Optional: Configure SendGrid for sending emails.
    Copy mail-example.js to mail.js and add your sendgrid credentials.
3) type ‘vagrant up’ in the scylla directory
4) Done! Scylla is now running at: http://localhost:8090/

## APIs
Scylla is built on a REST API, which allows simple integration with scripts and other services. The user interface urls mimic the REST urls for GETing data, while you can run a report or batch by GETing the ./run url.

## Behind the Curtain
Scylla was developed by Simply Measured.

## Name
Scylla is a part of Greek Mythology, originally a beautiful daughter of a God, but turned into a sea monster.

She has 12 tentacles and is known to sit high up on a cliff and wait for sailors to sail close enough so that she
can snatch them up or throw boulders down on top of them. She works in tandem with Charybdis,

[Vagrant][http://vagrantup.com]

# License
See [LICENSE][]

[LICENSE]: LICENSE.md
