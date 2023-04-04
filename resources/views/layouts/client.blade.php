<!DOCTYPE html>
<html data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gain core</title>
    <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" defer></script>
    @vite('resources/sass/core/core.scss')
</head>
<body>
    <header class="body-font border-b border-gray-200">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center mb-4 md:mb-0" href="/">
                <svg class="w-10 h-10" width="236" height="236" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M160.8 109.163C160.795 117.03 157.667 124.574 152.104 130.137C146.541 135.7 138.997 138.828 131.13 138.833H102.49C94.7167 138.69 87.31 135.502 81.8632 129.954C76.4164 124.407 73.3647 116.943 73.3647 109.168C73.3647 101.393 76.4164 93.9293 81.8632 88.3816C87.31 82.8338 94.7167 79.6457 102.49 79.5029H131.13C138.997 79.5029 146.542 82.6275 152.106 88.1895C157.67 93.7516 160.797 101.296 160.8 109.163Z" fill="#4D8CFF"/>
                    <path d="M235.58 117.863C235.6 133.33 232.569 148.649 226.661 162.943C220.754 177.237 212.085 190.226 201.152 201.165C190.218 212.105 177.235 220.782 162.944 226.698C148.654 232.614 133.337 235.654 117.87 235.643C110.62 235.655 103.385 234.986 96.26 233.643L95.8899 233.583C94.7099 233.383 93.5199 233.133 92.3299 232.873C91.5099 232.683 90.7 232.503 89.88 232.293L87.88 231.803C66.03 225.693 59.7099 213.433 58.1999 209.503C58.0712 209.224 57.9609 208.937 57.8699 208.643C57.8381 208.555 57.8114 208.465 57.79 208.373C57.7795 208.304 57.7795 208.233 57.79 208.163C57.0508 205.561 56.6772 202.868 56.6799 200.163C56.6742 196.262 57.4399 192.398 58.933 188.794C60.4261 185.19 62.6171 181.917 65.38 179.163C68.1312 176.397 71.4041 174.205 75.0089 172.713C78.6137 171.221 82.4787 170.46 86.38 170.473H132.19C143.35 170.494 154.299 167.443 163.84 161.653C177.422 153.466 187.305 140.336 191.412 125.018C195.52 109.701 193.534 93.3874 185.87 79.5031H210.53C205.504 67.6197 198.188 56.8415 189 47.7832H101.47C89.8907 47.7773 78.5462 51.0479 68.7472 57.217C58.9482 63.3862 51.0949 72.2021 46.0946 82.6461C41.0944 93.09 39.1513 104.736 40.4901 116.237C41.8288 127.739 46.3946 138.627 53.66 147.643C49.3917 150.219 45.4527 153.305 41.9299 156.833C39.1878 159.596 36.7103 162.609 34.5299 165.833C29.5581 173.117 26.2405 181.401 24.8099 190.103C13.2948 175.297 5.48207 157.955 2.02177 139.52C-1.43853 121.085 -0.446318 102.091 4.91584 84.1165C10.278 66.1425 19.855 49.7089 32.8501 36.1831C45.8452 22.6573 61.8825 12.4304 79.6276 6.35343C97.3727 0.276456 116.313 -1.4749 134.871 1.24509C153.43 3.96507 171.07 11.0778 186.325 21.9913C201.58 32.9048 214.008 47.3036 222.576 63.9896C231.143 80.6756 235.601 99.1663 235.58 117.923V117.863Z" fill="#4D8CFF"/>
                </svg>
                <span class="ml-3 text-xl">Gain core</span>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div class="flex items-center mr-5">
                        <button class="btn btn-ghost btn-sm btn-circle" data-set-theme="dark" data-act-class="hidden">
                            <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        </button>
                        <button class="btn btn-ghost btn-sm btn-circle" data-set-theme="light" data-act-class="hidden">
                            <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        </button>
                    </div>
                    <a class="mr-5 hover:text-primary link-hover {{ request()->route()->uri == '/' ? 'link-primary underline': '' }}" href="/">Home</a>
                    <a class="mr-5 hover:text-primary link-hover {{ request()->route()->uri == 'documents' ? 'link-primary underline': '' }}" href="/documents">Documents</a>
                </nav>
            </a>
            <a href="/app" class="inline-flex rounded-full items-center bg-base-300 border-0 py-1 px-3 focus:outline-none hover:text-primary text-base mt-4 md:mt-0">Go to application
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </header>
    <div class="mx-auto container">
            @yield('content')
    </div>
    <footer class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                </nav>
            </div>
            </div>
        </div>
        <div class="border-t border-gray-200">
            <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-no-wrap flex-wrap justify-center md:justify-start">
                <input class="sm:w-64 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4" placeholder="Placeholder" type="text">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                <br class="lg:block hidden">waistcoat green juice
                </p>
            </div>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
                </a>
                <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                </a>
                <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                </a>
                <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
                </a>
            </span>
            </div>
        </div>
        <div class="bg-gray-200">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailwind Blocks —
                <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
            </div>
        </div>
    </footer>
</body>
</html>
