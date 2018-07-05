+++
tags = ["abstraction", "asp.net", "config", "web-config"]
featured = false
description = ""
date = "2014-06-24T00:00:00"
share = true
image = ""
title = "Abstract config settings from web.config"
slug = "abstract-config-settings-from-web-config"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
postid = 4
aliases = [
    "/asp-net/abstract-config-settings-from-web-config/"
]
+++

In ASP.NET, application settings can be specified in the `web.config` file such as:

```xml
<appSettings>
    <add key="PostsPerPage" value="6" />
    <add key="CookieName" value="Foo" />
</appSettings>
```

The beauty of this is that you don't need to edit code to make changes to the application, and a single pre-compiled application can be used across multiple environments with different settings.

However, there are times when an application can have 100's of configuration settings, which will bloat the size of the `web.config` file.

Therefore in these instances it's best to abstract the application settings away from the main `web.config` file.

To do this a `configSource` attribute can be applied to the `appSettings` node of the `web.config` with a path to a seperate config file:

```xml
<appSettings configSource="Config\AppSettings.config" />
```

Then the `Config\AppSettings.config` can contain the `appSettings` node which would usually be in the `web.config`:

```xml
<appSettings>
    <add key="PostsPerPage" value="6" />
    <add key="CookieName" value="Foo" />
</appSettings>
```