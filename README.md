# wp-dev-box

## Format and Coding Standards for WordPress

Install composer dependencies

```
composer install
```

Install Visual Studio extensions:

-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
-   [PHP Sniffer & Beautifier](https://marketplace.visualstudio.com/items?itemName=ValeryanM.vscode-phpsab)

### Recommended VSCode Settings

To align your VSCode settings with the project's recommended configuration:

1. Navigate to the `.vscode` directory at the root of the project.
2. Copy the `settings.json.sample` file and rename the copy to `settings.json`.
3. If desired, customize the `settings.json` with your personal preferences.

---

## Debug

This project's configuration for `wp-env` is already prepared to be launched in DEBUG mode (see `.wp-env.json`)

```
"WP_DEBUG": true,
"WP_DEBUG_LOG": "/var/www/html/wp-content/debug.log",
"WP_DEBUG_DISPLAY": true,
"SCRIPT_DEBUG": true
```

To debug PHP code ran through `wp-env` you can enter the `bash` inside the container by doing 
```
yarn wp-env run cli bash
```

And then show in real time the `debug.log`
```
sudo tail -f /var/www/html/wp-content/debug.log
```

At `plugins/property-cpt-md/includes/utils.php` there's a handy `write_log` function that can be used to log your data into `debug.log`

### Debug with Xdebug

In order to run XDebug with Visual Studio you need to have the following extension installed 

-   [PHP Xdebug](https://marketplace.visualstudio.com/items?itemName=kakumei.php-xdebug)

And run `wp-env` with the following flag

```
npx wp-env start --xdebug
```

There's a `.vscode/launch.json` already defined in this project.

Check [here](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#using-xdebug) full info about enabling XDebug with `wp-env`
