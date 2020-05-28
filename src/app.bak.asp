<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="shortcut icon" href="images/favicon.png">
	<link rel="icon" href="images/favicon.png">
	<title>科学上网 Dashboard</title>
	<link rel="stylesheet" type="text/css" href="index_style.css">
	<link rel="stylesheet" type="text/css" href="form_style.css">
	<link rel="stylesheet" type="text/css" href="usp_style.css">
	<link rel="stylesheet" type="text/css" href="css/element.css">
	<link rel="stylesheet" type="text/css" href="/device-map/device-map.css">
	<link rel="stylesheet" type="text/css" href="/js/table/table.css">
	<link rel="stylesheet" type="text/css" href="/res/layer/theme/default/layer.css">
	<link rel="stylesheet" type="text/css" href="/res/softcenter.css">
	<script type="text/javascript" src="/state.js"></script>
	<script type="text/javascript" src="/popup.js"></script>
	<script type="text/javascript" src="/help.js"></script>
	<script type="text/javascript" src="/js/jquery.js"></script>
	<script type="text/javascript" src="/general.js"></script>
	<script type="text/javascript" language="JavaScript" src="/js/table/table.js"></script>
	<script type="text/javascript" language="JavaScript" src="/client_function.js"></script>
	<script type="text/javascript" src="/res/ss-menu.js"></script>
	<script type="text/javascript" src="/res/softcenter.js"></script>
</head>
<script>
	function init() {
		show_menu(menu_hook);
	}
</script>

<body onload="init();">
	<div id="TopBanner"></div>
	<div id="Loading" class="popup_bg"></div>
	<div id="LoadingBar" class="popup_bar_bg_ks" style="z-index: 200;">
		<table cellpadding="5" cellspacing="0" id="loadingBarBlock" class="loadingBarBlock" align="center">
			<tr>
				<td height="100">
					<div id="loading_block3" style="margin:10px auto;margin-left:10px;width:85%; font-size:12pt;"></div>
					<div id="loading_block2" style="margin:10px auto;width:95%;"></div>
					<div id="log_content2" style="margin-left:15px;margin-right:15px;margin-top:10px;overflow:hidden">
						<textarea cols="50" rows="36" wrap="off" readonly="readonly" id="log_content3"
							autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
							style="border:1px solid #000;width:99%; font-family:'Lucida Console'; font-size:11px;background:transparent;color:#FFFFFF;outline: none;padding-left:3px;padding-right:22px;overflow-x:hidden"></textarea>
					</div>
					<div id="ok_button" class="apply_gen" style="background: #000;display: none;">
						<input id="ok_button1" class="button_gen" type="button" onclick="hideSSLoadingBar()" value="确定">
					</div>
				</td>
			</tr>
		</table>
	</div>
	<table class="content" align="center" cellpadding="0" cellspacing="0">
		<tr>
			<td width="17">&nbsp;</td>
			<td valign="top" width="202">
				<div id="mainMenu"></div>
				<div id="subMenu"></div>
			</td>
			<td valign="top">
				<div id="tabMenu" class="submenuBlock"></div>
			</td>
		</tr>
	</table>

	<div id="app"></div>
	<div id="footer"></div>
	<script src="//localhost:4222/app.js"></script>
</body>

</html>
