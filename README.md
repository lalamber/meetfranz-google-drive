# meetfranz-google-drive
A Google Drive recipe for Franz.

I found a few others on GitHub, but it seems that since those were created, Franz (or Electron) has been updated, and in order to show the files in Google Drive there needs to be an additional few lines of JavaScript in webview.js.

# TO INSTALL:
1. Clone/Download this repo.
2. Rename it to 'gdrive'
3. Copy the folder and it's contents to whichever of these directories is right for your OS:

Windows: %appdata%/Franz/recipes/dev/
Mac: ~/Library/Application Support/Franz/recipes/dev/
Linux: ~/.config/Franz/recipes/dev/

If the /dev/ directory doesn't exist, you will have to create it.

4. Quit/Restart Franz.
5. Go to add a service, select 'Development' and then select Google Drive.
