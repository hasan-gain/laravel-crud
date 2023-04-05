<!DOCTYPE html>
<html data-theme="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gain core</title>
    @vite('resources/sass/client/index.scss')
</head>

<body>
    <header class="border-bottom">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <h2>Core 2.0</h2>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item ml-lg-3">
                            <a class="nav-link {{ request()->route()->uri == '/' ? 'text-primary active' : 'text-secondary' }}"
                                aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item ml-lg-3">
                            <a class="nav-link {{ request()->route()->uri == 'documents' ? 'active underline' : 'text-secondary' }}"
                                href="/documents">Documents</a>
                        </li>
                        <li class="nav-item ml-lg-3">
                            <a href="/app" class="btn btn-primary d-flex align-items-center rounded-pill">
                                Go to application
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" style="width: 16px; height: 16px;" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container">
        @yield('content')
    </div>
    <footer class="border-top">
        <div class="container-fluid">
            <div class="container">
                <div>
                    &#169; <a href="#">Gain Solution</a> | <span class="text-muted">2023</span>
                </div>
            </div>
        </div>
    </footer>
    @vite('resources/client.js')
</body>

</html>
