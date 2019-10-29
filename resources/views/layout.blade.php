<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="{{asset(mix('css/bootstrap.css'))}}" />
</head>
<body>
    <div class="container">
    	@yield('content')               
    </div>
</body>
<script type="text/javascript" src="{{asset(mix('js/app.js'))}}"></script>
<script type="text/javascript" src="{{asset(mix('js/index.js'))}}" defer></script>
</html>