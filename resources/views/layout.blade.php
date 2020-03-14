<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="{{asset(mix('css/bootstrap.css'))}}" />
    <base href="{{config('app.url')}}" target="_blank">
    <meta name="baseurl" content="{{config('app.url')}}">
    @if(env('APP_ENV') === 'production')
        <script>
            if (!window.location.port && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
            }
        </script>
    @endif
</head>
<body>
    <div class="container">
    	@yield('content')               
    </div>
</body>
<script type="text/javascript" src="{{asset(mix('js/app.js'))}}"></script>
<!-- <script type="text/javascript" src="{{asset(mix('js/index.js'))}}" defer></script> -->
</html>