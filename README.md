# pagerduty-schedule-attendee

Console out the current attendee from Pagerdury .ical URL

## Usage

- `[pagerduty ical URL]`: The iCalendar file of Pagerduty schedule.
- `<Date>`: A target date that can be evalutated by `new Date()`. e.g. `date -v +1w -R`

```
$ npx -q pagerduty-schedule-attendee [pagerduty ical URL] <Date>
username@example.com
```

or

```
$ ICS_URL=[pagerduty ical URL] TARGET_DATE=<Date> npx -q pagerduty-schedule-attendee
username@example.com
```
