---
title: Privacy Policy
disableComments: true
---

_Wilderness Prime Uploader · Last updated 29 June 2026_

This privacy policy explains how the **Wilderness Prime Uploader** ("the tool") accesses, uses, stores, shares, retains and deletes Google user data. The tool is a private command-line application operated solely by its developer and owner, David Brophy ("the operator"), to manage the operator's own YouTube channel, [Wilderness Prime](https://www.youtube.com/wildernessprime).

## Single-user, private tool

The tool is not a product or service offered to the public or to any other person. It has a single user — the operator — and runs only on the operator's own computer, from a command line. It accesses only the operator's own Google account data and never accesses, processes or stores data belonging to any other person.

## Data accessed

The tool requests the following Google API scopes through Google OAuth 2.0, and uses them only against the operator's own account:

- **`https://www.googleapis.com/auth/youtube.upload`** — to upload video files to the operator's own YouTube channel.
- **`https://www.googleapis.com/auth/youtube.force-ssl`** — to read and manage the operator's own YouTube videos, playlists, video thumbnails and caption tracks.

Through these scopes the tool reads and writes the operator's own: video files and metadata (titles, descriptions, tags, categories, scheduled publish dates, privacy status and video IDs), playlists and playlist membership, video thumbnails, and caption/subtitle tracks. The tool also uses the operator's own Google Drive and Google Sheets (through a separate Google service account) to read source video files and to store the channel's metadata spreadsheet.

The tool does not access Google user data belonging to anyone other than the operator.

## How data is used

Google user data is used solely to manage the operator's own YouTube channel — uploading new videos, setting and updating video metadata, managing playlists, uploading thumbnails, and uploading or downloading caption tracks. All processing happens locally on the operator's own machine. The data is not used for advertising, profiling, analytics, training machine-learning models, or any commercial purpose.

## Data sharing

No Google user data is sold, rented, shared with, or transferred to any third party. The tool has no other users and displays no data to any other person. Data is exchanged only between the operator's own machine and Google's own APIs.

## Data storage and protection

- Video metadata and downloaded transcripts are stored in the operator's own private Google Sheet, accessible only to the operator.
- An OAuth refresh token is cached in a file on the operator's own computer, within the operator's user account and protected by the operating system's file permissions, account password and disk encryption, so the operator does not have to sign in on every run.
- No Google user data is stored on any public server or any third-party server controlled by the tool.

## Data retention and deletion

Because the only data involved is the operator's own, the operator can review or delete it at any time. The operator can:

- edit or clear the data held in the Google Sheet;
- delete the locally cached OAuth token file; and
- revoke the tool's access entirely at any time via the operator's [Google Account permissions page](https://myaccount.google.com/permissions).

Data fetched from the YouTube API is refreshed on each run rather than retained long-term.

## Limited Use

The Wilderness Prime Uploader's use and transfer of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## YouTube API Services

The tool uses YouTube API Services. By using it, the operator agrees to the [YouTube Terms of Service](https://www.youtube.com/t/terms). Google's handling of data is described in the [Google Privacy Policy](https://policies.google.com/privacy).

## Contact

For any questions about this policy, contact: dave@brophy.uk
