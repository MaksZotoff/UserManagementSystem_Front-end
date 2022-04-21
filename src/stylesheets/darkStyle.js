const darkStyles = 
    `
    html {
        background-color: rgb(24, 26, 27); !important;
    }
    html, body, input, textarea, select, button {
        background-color: #181a1b;
    }
    html, body, input, textarea, select, button {
        border-color: #736b5e;
        color: #e8e6e3;
    }
    a {
        color: #3391ff;
    }
    table {
        border-color: #545b5e;
    }
    ::placeholder {
        color: #b2aba1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #555b00 !important;
        color: #e8e6e3 !important;
    }
    ::-webkit-scrollbar {
        background-color: #202324;
        color: #aba499;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #454a4d;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #575e62;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #484e51;
    }
    ::-webkit-scrollbar-corner {
        background-color: #181a1b;
    }
    ::selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    ::-moz-selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }

    /* Invert Style */
    .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^='https://www.gstatic.com/images/branding/googlelogo'], span[data-href^='https://www.hcaptcha.com/'] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
        filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
    }

    /* Variables Style */
    :root {
    --darkreader-neutral-background: #131516;
    --darkreader-neutral-text: #d8d4cf;
    --darkreader-selection-background: #004daa;
    --darkreader-selection-text: #e8e6e3;
    }

    /* Modified CSS */
    .fa-layers-counter {
        background-color: rgb(182, 0, 18);
        color: rgb(232, 230, 227);
    }
    .fa-border {
        border-color: rgb(53, 57, 59);
    }
    .fa-inverse {
        color: rgb(232, 230, 227);
    }
    .sr-only {
        border-color: initial;
    }
    .svg-inline--fa mask .fa-primary,
    .svg-inline--fa mask .fa-secondary {
        fill: rgb(232, 230, 227);
    }
    .fad.fa-inverse {
        color: rgb(232, 230, 227); 
    }
    :root {
        --blue: #007bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc3545; --orange: #fd7e14; --yellow: #ffc107; --green: #28a745; --teal: #20c997; --cyan: #17a2b8; --white: #fff; --gray: #6c757d; --gray-dark: #343a40; --primary: #007bff; --secondary: #6c757d; --success: #28a745; --info: #17a2b8; --warning: #ffc107; --danger: #dc3545; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans','Liberation Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',
        monospace;
    }
    html {
        -webkit-tap-highlight-color: transparent;
    }
    body {
        color: rgb(209, 205, 199);
        background-color: rgb(24, 26, 27); 
    }
    [tabindex='-1']:focus:not(:focus-visible) {
        outline-color: initial !important;
    }
    abbr[data-original-title],
    abbr[title] {
        text-decoration-color: initial;
        border-bottom-color: initial;
    }
    a {
        color: rgb(51, 162, 255);
        text-decoration-color: initial;
        background-color: transparent;
    }
    a:hover {
        color: rgb(97, 183, 255);
        text-decoration-color: initial;
    }
    a:not([href]):not([class]) {
        color: inherit;
        text-decoration-color: initial;
    }
    a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration-color: initial;
    }
    caption {
        color: rgb(158, 150, 137);
    }
    button:focus:not(:focus-visible) {
        outline-color: initial;
    }
    fieldset {
        border-color: initial;
    }
    legend {
        color: inherit;
    }
    hr {
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        border-top-color: rgba(140, 130, 115, 0.1);
    }
    .mark,
    mark {
        background-color: rgb(63, 54, 7);
    }
    .list-unstyled {
        list-style-image: initial;
    }
    .list-inline {
        list-style-image: initial;
    }
    .blockquote-footer {
        color: rgb(158, 150, 137);
    }
    .img-thumbnail {
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    .figure-caption {
        color: rgb(158, 150, 137);
    }
    code {
        color: rgb(233, 74, 147);
    }
    a > code {
        color: inherit;
    }
    kbd {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
    }
    pre {
        color: rgb(209, 205, 199);
    }
    pre code {
        color: inherit;
    }
    .table {
        color: rgb(209, 205, 199);
    }
    .table td,
    .table th {
        border-top-color: rgb(56, 61, 63);
    }
    .table thead th {
        border-bottom-color: rgb(56, 61, 63);
    }
    .table tbody + tbody {
        border-top-color: rgb(56, 61, 63);
    }
    .table-bordered {
        border-color: rgb(56, 61, 63);
    }
    .table-bordered td,
    .table-bordered th {
        border-color: rgb(56, 61, 63);
    }
    .table-borderless tbody + tbody,
    .table-borderless td,
    .table-borderless th,
    .table-borderless thead th {
        border-color: initial;
    }
    .table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .table-hover tbody tr:hover {
        color: rgb(209, 205, 199);
        background-color: rgba(0, 0, 0, 0.07);
    }
    .table-primary,
    .table-primary > td,
    .table-primary > th {
        background-color: rgb(44, 48, 50);
    }
    .table-primary tbody + tbody,
    .table-primary td,
    .table-primary th,
    .table-primary thead th {
        border-color: rgb(0, 68, 142);
    }
    .table-hover .table-primary:hover {
        background-color: rgb(51, 55, 57);
    }
    .table-hover .table-primary:hover > td,
    .table-hover .table-primary:hover > th {
        background-color: rgb(51, 55, 57);
    }
    .table-secondary,
    .table-secondary > td,
    .table-secondary > th {
        background-color: rgb(46, 50, 51);
    }
    .table-secondary tbody + tbody,
    .table-secondary td,
    .table-secondary th,
    .table-secondary thead th {
        border-color: rgb(68, 74, 77);
    }
    .table-hover .table-secondary:hover {
        background-color: rgb(53, 58, 60);
    }
    .table-hover .table-secondary:hover > td,
    .table-hover .table-secondary:hover > th {
        background-color: rgb(53, 58, 60);
    }
    .table-success,
    .table-success > td,
    .table-success > th {
        background-color: rgb(30, 72, 48);
    }
    .table-success tbody + tbody,
    .table-success td,
    .table-success th,
    .table-success thead th {
        border-color: rgb(43, 106, 58);
    }
    .table-hover .table-success:hover {
        background-color: rgb(34, 83, 54);
    }
    .table-hover .table-success:hover > td,
    .table-hover .table-success:hover > th {
        background-color: rgb(34, 83, 54);
    }
    .table-info,
    .table-info > td,
    .table-info > th {
        background-color: rgb(24, 71, 78);
    }
    .table-info tbody + tbody,
    .table-info td,
    .table-info th,
    .table-info thead th {
        border-color: rgb(35, 104, 114);
    }
    .table-hover .table-info:hover {
        background-color: rgb(28, 81, 89);
    }
    .table-hover .table-info:hover > td,
    .table-hover .table-info:hover > th {
        background-color: rgb(28, 81, 89);
    }
    .table-warning,
    .table-warning > td,
    .table-warning > th {
        background-color: rgb(92, 70, 0);
    }
    .table-warning tbody + tbody,
    .table-warning td,
    .table-warning th,
    .table-warning thead th {
        border-color: rgb(141, 106, 0);
    }
    .table-hover .table-warning:hover {
        background-color: rgb(107, 81, 0);
    }
    .table-hover .table-warning:hover > td,
    .table-hover .table-warning:hover > th {
        background-color: rgb(107, 81, 0);
    }
    .table-danger,
    .table-danger > td,
    .table-danger > th {
        background-color: rgb(78, 14, 20);
    }
    .table-danger tbody + tbody,
    .table-danger td,
    .table-danger th,
    .table-danger thead th {
        border-color: rgb(119, 20, 29);
    }
    .table-hover .table-danger:hover {
        background-color: rgb(91, 16, 24);
    }
    .table-hover .table-danger:hover > td,
    .table-hover .table-danger:hover > th {
        background-color: rgb(91, 16, 24);
    }
    .table-light,
    .table-light > td,
    .table-light > th {
        background-color: rgb(25, 27, 28);
    }
    .table-light tbody + tbody,
    .table-light td,
    .table-light th,
    .table-light thead th {
        border-color: rgb(49, 53, 55);
    }
    .table-hover .table-light:hover {
        background-color: rgb(32, 35, 36);
    }
    .table-hover .table-light:hover > td,
    .table-hover .table-light:hover > th {
        background-color: rgb(32, 35, 36);
    }
    .table-dark,
    .table-dark > td,
    .table-dark > th {
        background-color: rgb(55, 60, 62);
    }
    .table-dark tbody + tbody,
    .table-dark td,
    .table-dark th,
    .table-dark thead th {
        border-color: rgb(77, 83, 87);
    }
    .table-hover .table-dark:hover {
        background-color: rgb(62, 67, 70);
    }
    .table-hover .table-dark:hover > td,
    .table-hover .table-dark:hover > th {
        background-color: rgb(62, 67, 70);
    }
    .table-active,
    .table-active > td,
    .table-active > th {
        background-color: rgba(0, 0, 0, 0.07);
    }
    .table-hover .table-active:hover {
        background-color: rgba(0, 0, 0, 0.07);
    }
    .table-hover .table-active:hover > td,
    .table-hover .table-active:hover > th {
        background-color: rgba(0, 0, 0, 0.07);
    }
    .table .thead-dark th {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
        border-color: rgb(115, 106, 94);
    }
    .table .thead-light th {
        color: rgb(181, 175, 166);
        background-color: rgb(35, 38, 39);
        border-color: rgb(56, 61, 63);
    }
    .table-dark {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
    }
    .table-dark td,
    .table-dark th,
    .table-dark thead th {
        border-color: rgb(115, 106, 94);
    }
    .table-dark.table-bordered {
        border-color: initial;
    }
    .table-dark.table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(24, 26, 27, 0.05);
    }
    .table-dark.table-hover tbody tr:hover {
        color: rgb(232, 230, 227);
        background-color: rgba(24, 26, 27, 0.07);
    }
    @media (max-width: 575.98px) {
        .table-responsive-sm > .table-bordered {
            border-color: initial;
        }
    }
    @media (max-width: 767.98px) {
        .table-responsive-md > .table-bordered {
            border-color: initial;
        }
    }
    @media (max-width: 991.98px) {
        .table-responsive-lg > .table-bordered {
            border-color: initial;
        }
    }
    @media (max-width: 1199.98px) {
        .table-responsive-xl > .table-bordered {
            border-color: initial;
        }
    }
    .table-responsive > .table-bordered {
        border-color: initial;
    }
    .form-control {
        color: rgb(181, 175, 166);
        background-color: rgb(24, 26, 27);
        border-color: rgb(60, 65, 68);
    }
    .form-control:focus {
        color: rgb(181, 175, 166);
        background-color: rgb(24, 26, 27);
        border-color: rgb(0, 67, 140);
        outline-color: initial;
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .form-control::placeholder {
        color: rgb(158, 150, 137);
    }
    .form-control:disabled,
    .form-control[readonly] {
        background-color: rgb(35, 38, 39);
    }
    .form-control-plaintext {
        color: rgb(209, 205, 199);
        background-color: transparent;
        border-color: transparent;
    }
    .form-check-input:disabled ~ .form-check-label,
    .form-check-input[disabled] ~ .form-check-label {
        color: rgb(158, 150, 137);
    }
    .valid-feedback {
        color: rgb(97, 217, 124);
    }
    .valid-tooltip {
        color: rgb(232, 230, 227);
        background-color: rgba(32, 134, 55, 0.9);
    }
    .form-control.is-valid,
    .was-validated .form-control:valid {
        border-color: rgb(37, 156, 64);
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2328a745%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e');
    }
    .form-control.is-valid:focus,
    .was-validated .form-control:valid:focus {
        border-color: rgb(37, 156, 64);
        box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-select.is-valid,
    .was-validated .custom-select:valid {
        border-color: rgb(37, 156, 64);
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc0JTI3IGhlaWdodD0lMjc1JTI3IHZpZXdCb3g9JTI3MCAwIDQgNSUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMzNDNhNDAlMjcgZD0lMjdNMiAwTDAgMmg0em0wIDVMMCAzaDR6JTI3LyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+'),
        url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%2328a745%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e');
        background-color: rgb(24, 26, 27);
    }
    .custom-select.is-valid:focus,
    .was-validated .custom-select:valid:focus {
        border-color: rgb(37, 156, 64);
        box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
    }
    .form-check-input.is-valid ~ .form-check-label,
    .was-validated .form-check-input:valid ~ .form-check-label {
        color: rgb(97, 217, 124);
    }
    .custom-control-input.is-valid ~ .custom-control-label,
    .was-validated .custom-control-input:valid ~ .custom-control-label {
        color: rgb(97, 217, 124);
    }
    .custom-control-input.is-valid ~ .custom-control-label::before,
    .was-validated .custom-control-input:valid ~ .custom-control-label::before {
        border-color: rgb(37, 156, 64);
    }
    .custom-control-input.is-valid:checked ~ .custom-control-label::before,
    .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before {
        border-color: rgb(35, 143, 59);
        background-color: rgb(39, 163, 91);
    }
    .custom-control-input.is-valid:focus ~ .custom-control-label::before,
    .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before {
        box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before,
    .was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before {
        border-color: rgb(37, 156, 64);
    }
    .custom-file-input.is-valid ~ .custom-file-label,
    .was-validated .custom-file-input:valid ~ .custom-file-label {
        border-color: rgb(37, 156, 64);
    }
    .custom-file-input.is-valid:focus ~ .custom-file-label,
    .was-validated .custom-file-input:valid:focus ~ .custom-file-label {
        border-color: rgb(37, 156, 64);
        box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
    }
    .invalid-feedback {
        color: rgb(223, 70, 85);
    }
    .invalid-tooltip {
        color: rgb(232, 230, 227);
        background-color: rgba(165, 29, 42, 0.9);
    }
    .form-control.is-invalid,
    .was-validated .form-control:invalid {
        border-color: rgb(148, 26, 37);
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTIlMjcgaGVpZ2h0PSUyNzEyJTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3JTIzZGMzNTQ1JTI3IHZpZXdCb3g9JTI3MCAwIDEyIDEyJTI3JTNlJTNjY2lyY2xlIGN4PSUyNzYlMjcgY3k9JTI3NiUyNyByPSUyNzQuNSUyNy8lM2UlM2NwYXRoIHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyBkPSUyN001LjggMy42aC40TDYgNi41eiUyNy8lM2UlM2NjaXJjbGUgY3g9JTI3NiUyNyBjeT0lMjc4LjIlMjcgcj0lMjcuNiUyNyBmaWxsPSUyNyUyM2RjMzU0NSUyNyBzdHJva2U9JTI3bm9uZSUyNy8lM2UlM2Mvc3ZnJTNlIiAvPjwvc3ZnPg==');
    }
    .form-control.is-invalid:focus,
    .was-validated .form-control:invalid:focus {
        border-color: rgb(148, 26, 37);
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-select.is-invalid,
    .was-validated .custom-select:invalid {
        border-color: rgb(148, 26, 37);
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc0JTI3IGhlaWdodD0lMjc1JTI3IHZpZXdCb3g9JTI3MCAwIDQgNSUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMzNDNhNDAlMjcgZD0lMjdNMiAwTDAgMmg0em0wIDVMMCAzaDR6JTI3LyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+'),
        url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTIlMjcgaGVpZ2h0PSUyNzEyJTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3JTIzZGMzNTQ1JTI3IHZpZXdCb3g9JTI3MCAwIDEyIDEyJTI3JTNlJTNjY2lyY2xlIGN4PSUyNzYlMjcgY3k9JTI3NiUyNyByPSUyNzQuNSUyNy8lM2UlM2NwYXRoIHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyBkPSUyN001LjggMy42aC40TDYgNi41eiUyNy8lM2UlM2NjaXJjbGUgY3g9JTI3NiUyNyBjeT0lMjc4LjIlMjcgcj0lMjcuNiUyNyBmaWxsPSUyNyUyM2RjMzU0NSUyNyBzdHJva2U9JTI3bm9uZSUyNy8lM2UlM2Mvc3ZnJTNlIiAvPjwvc3ZnPg==');
        background-color: rgb(24, 26, 27);
    }
    .custom-select.is-invalid:focus,
    .was-validated .custom-select:invalid:focus {
        border-color: rgb(148, 26, 37);
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
    }
    .form-check-input.is-invalid ~ .form-check-label,
    .was-validated .form-check-input:invalid ~ .form-check-label {
        color: rgb(223, 70, 85);
    }
    .custom-control-input.is-invalid ~ .custom-control-label,
    .was-validated .custom-control-input:invalid ~ .custom-control-label {
        color: rgb(223, 70, 85);
    }
    .custom-control-input.is-invalid ~ .custom-control-label::before,
    .was-validated .custom-control-input:invalid ~ .custom-control-label::before {
        border-color: rgb(148, 26, 37);
    }
    .custom-control-input.is-invalid:checked ~ .custom-control-label::before,
    .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before {
        border-color: rgb(135, 23, 34);
        background-color: rgb(139, 24, 35);
    }
    .custom-control-input.is-invalid:focus ~ .custom-control-label::before,
    .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before {
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before,
    .was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before {
        border-color: rgb(148, 26, 37);
    }
    .custom-file-input.is-invalid ~ .custom-file-label,
    .was-validated .custom-file-input:invalid ~ .custom-file-label {
        border-color: rgb(148, 26, 37);
    }
    .custom-file-input.is-invalid:focus ~ .custom-file-label,
    .was-validated .custom-file-input:invalid:focus ~ .custom-file-label {
        border-color: rgb(148, 26, 37);
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn {
        color: rgb(209, 205, 199);
        background-color: transparent;
        border-color: transparent;
    }
    .btn:hover {
        color: rgb(209, 205, 199);
        text-decoration-color: initial;
    }
    .btn.focus,
    .btn:focus {
        outline-color: initial;
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn-primary {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .btn-primary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 84, 174);
        border-color: rgb(0, 93, 194);
    }
    .btn-primary.focus,
    .btn-primary:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 84, 174);
        border-color: rgb(0, 93, 194);
        box-shadow: rgba(0, 88, 181, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-primary.disabled,
    .btn-primary:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .btn-primary:not(:disabled):not(.disabled).active,
    .btn-primary:not(:disabled):not(.disabled):active,
    .show > .btn-primary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 78, 163);
        border-color: rgb(0, 95, 198);
    }
    .btn-primary:not(:disabled):not(.disabled).active:focus,
    .btn-primary:not(:disabled):not(.disabled):active:focus,
    .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: rgba(0, 88, 181, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-secondary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(73, 79, 82);
        border-color: rgb(110, 102, 90);
    }
    .btn-secondary.focus,
    .btn-secondary:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(73, 79, 82);
        border-color: rgb(110, 102, 90);
        box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary.disabled,
    .btn-secondary:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-secondary:not(:disabled):not(.disabled).active,
    .btn-secondary:not(:disabled):not(.disabled):active,
    .show > .btn-secondary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(69, 74, 77);
        border-color: rgb(112, 104, 92);
    }
    .btn-secondary:not(:disabled):not(.disabled).active:focus,
    .btn-secondary:not(:disabled):not(.disabled):active:focus,
    .show > .btn-secondary.dropdown-toggle:focus {
        box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success {
        color: rgb(232, 230, 227);
        background-color: rgb(32, 134, 55);
        border-color: rgb(37, 156, 64);
    }
    .btn-success:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(26, 109, 45);
        border-color: rgb(40, 168, 69);
    }
    .btn-success.focus,
    .btn-success:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(26, 109, 45);
        border-color: rgb(40, 168, 69);
        box-shadow: rgba(58, 144, 78, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success.disabled,
    .btn-success:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(32, 134, 55);
        border-color: rgb(37, 156, 64);
    }
    .btn-success:not(:disabled):not(.disabled).active,
    .btn-success:not(:disabled):not(.disabled):active,
    .show > .btn-success.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 101, 42);
        border-color: rgb(41, 171, 71);
    }
    .btn-success:not(:disabled):not(.disabled).active:focus,
    .btn-success:not(:disabled):not(.disabled):active:focus,
    .show > .btn-success.dropdown-toggle:focus {
        box-shadow: rgba(58, 144, 78, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info {
        color: rgb(232, 230, 227);
        background-color: rgb(18, 130, 147);
        border-color: rgb(21, 151, 171);
    }
    .btn-info:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(15, 106, 120);
        border-color: rgb(23, 163, 186);
    }
    .btn-info.focus,
    .btn-info:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(15, 106, 120);
        border-color: rgb(23, 163, 186);
        box-shadow: rgba(46, 141, 156, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info.disabled,
    .btn-info:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(18, 130, 147);
        border-color: rgb(21, 151, 171);
    }
    .btn-info:not(:disabled):not(.disabled).active,
    .btn-info:not(:disabled):not(.disabled):active,
    .show > .btn-info.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(14, 98, 111);
        border-color: rgb(24, 166, 188);
    }
    .btn-info:not(:disabled):not(.disabled).active:focus,
    .btn-info:not(:disabled):not(.disabled):active:focus,
    .show > .btn-info.dropdown-toggle:focus {
        box-shadow: rgba(46, 141, 156, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning {
        color: rgb(209, 205, 199);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-warning:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(179, 134, 0);
        border-color: rgb(192, 144, 0);
    }
    .btn-warning.focus,
    .btn-warning:focus {
        color: rgb(209, 205, 199);
        background-color: rgb(179, 134, 0);
        border-color: rgb(192, 144, 0);
        box-shadow: rgba(178, 136, 10, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning.disabled,
    .btn-warning:disabled {
        color: rgb(209, 205, 199);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-warning:not(:disabled):not(.disabled).active,
    .btn-warning:not(:disabled):not(.disabled):active,
    .show > .btn-warning.dropdown-toggle {
        color: rgb(209, 205, 199);
        background-color: rgb(169, 126, 0);
        border-color: rgb(196, 147, 0);
    }
    .btn-warning:not(:disabled):not(.disabled).active:focus,
    .btn-warning:not(:disabled):not(.disabled):active:focus,
    .show > .btn-warning.dropdown-toggle:focus {
        box-shadow: rgba(178, 136, 10, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-danger:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(160, 28, 41);
        border-color: rgb(160, 28, 41);
    }
    .btn-danger.focus,
    .btn-danger:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(160, 28, 41);
        border-color: rgb(160, 28, 41);
        box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger.disabled,
    .btn-danger:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-danger:not(:disabled):not(.disabled).active,
    .btn-danger:not(:disabled):not(.disabled):active,
    .show > .btn-danger.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(151, 26, 38);
        border-color: rgb(164, 29, 41);
    }
    .btn-danger:not(:disabled):not(.disabled).active:focus,
    .btn-danger:not(:disabled):not(.disabled):active:focus,
    .show > .btn-danger.dropdown-toggle:focus {
        box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light {
        color: rgb(209, 205, 199);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-light:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(38, 41, 43);
        border-color: rgb(57, 62, 64);
    }
    .btn-light.focus,
    .btn-light:focus {
        color: rgb(209, 205, 199);
        background-color: rgb(38, 41, 43);
        border-color: rgb(57, 62, 64);
        box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light.disabled,
    .btn-light:disabled {
        color: rgb(209, 205, 199);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-light:not(:disabled):not(.disabled).active,
    .btn-light:not(:disabled):not(.disabled):active,
    .show > .btn-light.dropdown-toggle {
        color: rgb(209, 205, 199);
        background-color: rgb(42, 45, 47);
        border-color: rgb(59, 64, 66);
    }
    .btn-light:not(:disabled):not(.disabled).active:focus,
    .btn-light:not(:disabled):not(.disabled):active:focus,
    .show > .btn-light.dropdown-toggle:focus {
        box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
        border-color: rgb(121, 112, 99);
    }
    .btn-dark:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(29, 32, 33);
        border-color: rgb(129, 120, 106);
    }
    .btn-dark.focus,
    .btn-dark:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(29, 32, 33);
        border-color: rgb(129, 120, 106);
        box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark.disabled,
    .btn-dark:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
        border-color: rgb(121, 112, 99);
    }
    .btn-dark:not(:disabled):not(.disabled).active,
    .btn-dark:not(:disabled):not(.disabled):active,
    .show > .btn-dark.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 27, 28);
        border-color: rgb(131, 122, 108);
    }
    .btn-dark:not(:disabled):not(.disabled).active:focus,
    .btn-dark:not(:disabled):not(.disabled):active:focus,
    .show > .btn-dark.dropdown-toggle:focus {
        box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary {
        color: rgb(51, 162, 255);
        border-color: rgb(0, 86, 179);
    }
    .btn-outline-primary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .btn-outline-primary.focus,
    .btn-outline-primary:focus {
        box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary.disabled,
    .btn-outline-primary:disabled {
        color: rgb(51, 162, 255);
        background-color: transparent;
    }
    .btn-outline-primary:not(:disabled):not(.disabled).active,
    .btn-outline-primary:not(:disabled):not(.disabled):active,
    .show > .btn-outline-primary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
    .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-primary.dropdown-toggle:focus {
        box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary {
        color: rgb(158, 150, 137);
        border-color: rgb(102, 94, 83);
    }
    .btn-outline-secondary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-outline-secondary.focus,
    .btn-outline-secondary:focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary.disabled,
    .btn-outline-secondary:disabled {
        color: rgb(158, 150, 137);
        background-color: transparent;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled).active,
    .btn-outline-secondary:not(:disabled):not(.disabled):active,
    .show > .btn-outline-secondary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-secondary.dropdown-toggle:focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success {
        color: rgb(97, 217, 124);
        border-color: rgb(37, 156, 64);
    }
    .btn-outline-success:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(32, 134, 55);
        border-color: rgb(37, 156, 64);
    }
    .btn-outline-success.focus,
    .btn-outline-success:focus {
        box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success.disabled,
    .btn-outline-success:disabled {
        color: rgb(97, 217, 124);
        background-color: transparent;
    }
    .btn-outline-success:not(:disabled):not(.disabled).active,
    .btn-outline-success:not(:disabled):not(.disabled):active,
    .show > .btn-outline-success.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(32, 134, 55);
        border-color: rgb(37, 156, 64);
    }
    .btn-outline-success:not(:disabled):not(.disabled).active:focus,
    .btn-outline-success:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-success.dropdown-toggle:focus {
        box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info {
        color: rgb(81, 212, 233);
        border-color: rgb(21, 151, 171);
    }
    .btn-outline-info:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(18, 130, 147);
        border-color: rgb(21, 151, 171);
    }
    .btn-outline-info.focus,
    .btn-outline-info:focus {
        box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info.disabled,
    .btn-outline-info:disabled {
        color: rgb(81, 212, 233);
        background-color: transparent;
    }
    .btn-outline-info:not(:disabled):not(.disabled).active,
    .btn-outline-info:not(:disabled):not(.disabled):active,
    .show > .btn-outline-info.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(18, 130, 147);
        border-color: rgb(21, 151, 171);
    }
    .btn-outline-info:not(:disabled):not(.disabled).active:focus,
    .btn-outline-info:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-info.dropdown-toggle:focus {
        box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning {
        color: rgb(255, 199, 30);
        border-color: rgb(176, 132, 0);
    }
    .btn-outline-warning:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-outline-warning.focus,
    .btn-outline-warning:focus {
        box-shadow: rgba(200, 150, 0, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning.disabled,
    .btn-outline-warning:disabled {
        color: rgb(255, 199, 30);
        background-color: transparent;
    }
    .btn-outline-warning:not(:disabled):not(.disabled).active,
    .btn-outline-warning:not(:disabled):not(.disabled):active,
    .show > .btn-outline-warning.dropdown-toggle {
        color: rgb(209, 205, 199);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
    .btn-outline-warning:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-warning.dropdown-toggle:focus {
        box-shadow: rgba(200, 150, 0, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger {
        color: rgb(223, 70, 85);
        border-color: rgb(148, 26, 37);
    }
    .btn-outline-danger:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-outline-danger.focus,
    .btn-outline-danger:focus {
        box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger.disabled,
    .btn-outline-danger:disabled {
        color: rgb(223, 70, 85);
        background-color: transparent;
    }
    .btn-outline-danger:not(:disabled):not(.disabled).active,
    .btn-outline-danger:not(:disabled):not(.disabled):active,
    .show > .btn-outline-danger.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
    .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-danger.dropdown-toggle:focus {
        box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light {
        color: rgb(228, 226, 222);
        border-color: rgb(50, 54, 56);
    }
    .btn-outline-light:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-outline-light.focus,
    .btn-outline-light:focus {
        box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light.disabled,
    .btn-outline-light:disabled {
        color: rgb(228, 226, 222);
        background-color: transparent;
    }
    .btn-outline-light:not(:disabled):not(.disabled).active,
    .btn-outline-light:not(:disabled):not(.disabled):active,
    .show > .btn-outline-light.dropdown-toggle {
        color: rgb(209, 205, 199);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-outline-light:not(:disabled):not(.disabled).active:focus,
    .btn-outline-light:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-light.dropdown-toggle:focus {
        box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark {
        color: rgb(195, 190, 182);
        border-color: rgb(121, 112, 99);
    }
    .btn-outline-dark:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
        border-color: rgb(121, 112, 99);
    }
    .btn-outline-dark.focus,
    .btn-outline-dark:focus {
        box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark.disabled,
    .btn-outline-dark:disabled {
        color: rgb(195, 190, 182);
        background-color: transparent;
    }
    .btn-outline-dark:not(:disabled):not(.disabled).active,
    .btn-outline-dark:not(:disabled):not(.disabled):active,
    .show > .btn-outline-dark.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
        border-color: rgb(121, 112, 99);
    }
    .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
    .btn-outline-dark:not(:disabled):not(.disabled):active:focus,
    .show > .btn-outline-dark.dropdown-toggle:focus {
        box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-link {
        color: rgb(51, 162, 255);
        text-decoration-color: initial;
    }
    .btn-link:hover {
        color: rgb(97, 183, 255);
        text-decoration-color: initial;
    }
    .btn-link.focus,
    .btn-link:focus {
        text-decoration-color: initial;
    }
    .btn-link.disabled,
    .btn-link:disabled {
        color: rgb(158, 150, 137);
    }
    .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropdown-menu {
        color: rgb(209, 205, 199);
        list-style-image: initial;
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.15);
    }
    .dropup .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropright .dropdown-toggle::after {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
        border-left-color: initial;
    }
    .dropleft .dropdown-toggle::before {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
    }
    .dropdown-divider {
        border-top-color: rgb(53, 58, 60);
    }
    .dropdown-item {
        color: rgb(209, 205, 199);
        background-color: transparent;
        border-color: initial;
    }
    .dropdown-item:focus,
    .dropdown-item:hover {
        color: rgb(217, 213, 208);
        text-decoration-color: initial;
        background-color: rgb(35, 38, 39);
    }
    .dropdown-item.active,
    .dropdown-item:active {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
        background-color: rgb(0, 98, 204);
    }
    .dropdown-item.disabled,
    .dropdown-item:disabled {
        color: rgb(185, 179, 170);
        background-color: transparent;
    }
    .dropdown-header {
        color: rgb(158, 150, 137);
    }
    .dropdown-item-text {
        color: rgb(209, 205, 199);
    }
    .input-group-text {
        color: rgb(181, 175, 166);
        background-color: rgb(35, 38, 39);
        border-color: rgb(60, 65, 68);
    }
    .custom-control-input:checked ~ .custom-control-label::before {
        color: rgb(232, 230, 227);
        border-color: rgb(0, 86, 179);
        background-color: rgb(0, 98, 204);
    }
    .custom-control-input:focus ~ .custom-control-label::before {
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
        border-color: rgb(0, 67, 140);
    }
    .custom-control-input:not(:disabled):active ~ .custom-control-label::before {
        color: rgb(232, 230, 227);
        background-color: rgb(45, 49, 51);
        border-color: rgb(0, 59, 125);
    }
    .custom-control-input:disabled ~ .custom-control-label,
    .custom-control-input[disabled] ~ .custom-control-label {
        color: rgb(158, 150, 137);
    }
    .custom-control-input:disabled ~ .custom-control-label::before,
    .custom-control-input[disabled] ~ .custom-control-label::before {
        background-color: rgb(35, 38, 39);
    }
    .custom-control-label::before {
        background-color: rgb(24, 26, 27);
        border-color: rgb(69, 75, 78);
    }
    .custom-control-label::after {
        background-image: initial;
        background-color: initial;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23fff%27 d=%27M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z%27/%3e%3c/svg%3e');
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
        border-color: rgb(0, 86, 179);
        background-color: rgb(0, 98, 204);
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3e%3cpath stroke=%27%23fff%27 d=%27M0 2h4%27/%3e%3c/svg%3e');
    }
    .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(0, 98, 204, 0.5);
    }
    .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
        background-color: rgba(0, 98, 204, 0.5);
    }
    .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e');
    }
    .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(0, 98, 204, 0.5);
    }
    .custom-switch .custom-control-label::after {
        background-color: rgb(66, 71, 74);
    }
    .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
        background-color: rgb(24, 26, 27);
    }
    .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(0, 98, 204, 0.5);
    }
    .custom-select {
        color: rgb(181, 175, 166);
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNCIgaGVpZ2h0PSI1Ij48ZGVmcz48ZmlsdGVyIGlkPSJkYXJrcmVhZGVyLWltYWdlLWZpbHRlciI+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAuMjQ5IC0wLjYxNCAtMC42NzIgMC4wMDAgMS4wMzUgLTAuNjQ2IDAuMjg4IC0wLjY2NCAwLjAwMCAxLjAyMCAtMC42MzYgLTAuNjA5IDAuMjUwIDAuMDAwIDAuOTk0IDAuMDAwIDAuMDAwIDAuMDAwIDEuMDAwIDAuMDAwIiAvPjwvZmlsdGVyPjwvZGVmcz48aW1hZ2Ugd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsdGVyPSJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKSIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc0JTI3IGhlaWdodD0lMjc1JTI3IHZpZXdCb3g9JTI3MCAwIDQgNSUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMzNDNhNDAlMjcgZD0lMjdNMiAwTDAgMmg0em0wIDVMMCAzaDR6JTI3LyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+');
        background-color: rgb(24, 26, 27);
        border-color: rgb(60, 65, 68);
    }
    .custom-select:focus {
        border-color: rgb(0, 67, 140);
        outline-color: initial;
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-select[multiple],
    .custom-select[size]:not([size='1']) {
        background-image: none;
    }
    .custom-select:disabled {
        color: rgb(158, 150, 137);
        background-color: rgb(35, 38, 39);
    }
    .custom-file-input:focus ~ .custom-file-label {
        border-color: rgb(0, 67, 140);
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-file-input:disabled ~ .custom-file-label,
    .custom-file-input[disabled] ~ .custom-file-label {
        background-color: rgb(35, 38, 39);
    }
    .custom-file-label {
        color: rgb(181, 175, 166);
        background-color: rgb(24, 26, 27);
        border-color: rgb(60, 65, 68);
    }
    .custom-file-label::after {
        color: rgb(181, 175, 166);
        background-color: rgb(35, 38, 39);
        border-left-color: inherit;
    }
    .custom-range {
        background-color: transparent;
    }
    .custom-range:focus {
        outline-color: initial;
    }
    .custom-range:focus::-webkit-slider-thumb {
        box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px,
        rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-range::-webkit-slider-thumb {
        background-color: rgb(0, 98, 204);
        border-color: initial;
    }
    .custom-range::-webkit-slider-thumb:active {
        background-color: rgb(45, 49, 51);
    }
    .custom-range::-webkit-slider-runnable-track {
        color: transparent;
        background-color: rgb(40, 44, 45);
        border-color: transparent;
    }
    .custom-range:disabled::-webkit-slider-thumb {
        background-color: rgb(66, 71, 74);
    }
    .nav {
        list-style-image: initial;
    }
    .nav-link:focus,
    .nav-link:hover {
        text-decoration-color: initial;
    }
    .nav-link.disabled {
        color: rgb(158, 150, 137);
    }
    .nav-tabs {
        border-bottom-color: rgb(56, 61, 63);
    }
    .nav-tabs .nav-link {
        border-color: transparent;
    }
    .nav-tabs .nav-link:focus,
    .nav-tabs .nav-link:hover {
        border-color: rgb(53, 58, 60) rgb(53, 58, 60) rgb(56, 61, 63);
    }
    .nav-tabs .nav-link.disabled {
        color: rgb(158, 150, 137);
        background-color: transparent;
        border-color: transparent;
    }
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
        color: rgb(181, 175, 166);
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63) rgb(56, 61, 63) rgb(48, 52, 54);
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
    }
    .navbar-brand:focus,
    .navbar-brand:hover {
        text-decoration-color: initial;
    }
    .navbar-nav {
        list-style-image: initial;
    }
    .navbar-toggler {
        background-color: transparent;
        border-color: transparent;
    }
    .navbar-toggler:focus,
    .navbar-toggler:hover {
        text-decoration-color: initial;
    }
    .navbar-toggler-icon {
        background-image: initial;
        background-color: initial;
    }
    .navbar-light .navbar-brand {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-brand:focus,
    .navbar-light .navbar-brand:hover {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-nav .nav-link {
        color: rgba(232, 230, 227, 0.5);
    }
    .navbar-light .navbar-nav .nav-link:focus,
    .navbar-light .navbar-nav .nav-link:hover {
        color: rgba(232, 230, 227, 0.7);
    }
    .navbar-light .navbar-nav .nav-link.disabled {
        color: rgba(232, 230, 227, 0.3);
    }
    .navbar-light .navbar-nav .active > .nav-link,
    .navbar-light .navbar-nav .nav-link.active,
    .navbar-light .navbar-nav .nav-link.show,
    .navbar-light .navbar-nav .show > .nav-link {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-toggler {
        color: rgba(232, 230, 227, 0.5);
        border-color: rgba(140, 130, 115, 0.1);
    }
    .navbar-light .navbar-toggler-icon {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MzAlMjcgaGVpZ2h0PSUyNzMwJTI3IHZpZXdCb3g9JTI3MCAwIDMwIDMwJTI3JTNlJTNjcGF0aCBzdHJva2U9JTI3cmdiYSUyODAsIDAsIDAsIDAuNSUyOSUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbWl0ZXJsaW1pdD0lMjcxMCUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBkPSUyN000IDdoMjJNNCAxNWgyMk00IDIzaDIyJTI3LyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+');
    }
    .navbar-light .navbar-text {
        color: rgba(232, 230, 227, 0.5);
    }
    .navbar-light .navbar-text a {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-text a:focus,
    .navbar-light .navbar-text a:hover {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-dark .navbar-brand {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-brand:focus,
    .navbar-dark .navbar-brand:hover {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(232, 230, 227, 0.5);
    }
    .navbar-dark .navbar-nav .nav-link:focus,
    .navbar-dark .navbar-nav .nav-link:hover {
        color: rgba(232, 230, 227, 0.75);
    }
    .navbar-dark .navbar-nav .nav-link.disabled {
        color: rgba(232, 230, 227, 0.25);
    }
    .navbar-dark .navbar-nav .active > .nav-link,
    .navbar-dark .navbar-nav .nav-link.active,
    .navbar-dark .navbar-nav .nav-link.show,
    .navbar-dark .navbar-nav .show > .nav-link {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-toggler {
        color: rgba(232, 230, 227, 0.5);
        border-color: rgba(48, 52, 54, 0.1);
    }
    .navbar-dark .navbar-toggler-icon {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.5%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');
    }
    .navbar-dark .navbar-text {
        color: rgba(232, 230, 227, 0.5);
    }
    .navbar-dark .navbar-text a {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-text a:focus,
    .navbar-dark .navbar-text a:hover {
        color: rgb(232, 230, 227);
    }
    
    .card {
        background-color: #2d2d2d;
        border-color: rgba(140, 130, 115, 0.13);
    }
    .card > .list-group {
        border-top-color: inherit;
        border-bottom-color: inherit;
    }
    .card > .card-header + .list-group,
    .card > .list-group + .card-footer {
        border-top-color: initial;
    }
    .card-link:hover {
        text-decoration-color: initial;
    }
    .card-header {
        background-color: rgba(0, 0, 0, 0.03);
        border-bottom-color: rgba(140, 130, 115, 0.13);
    }
    .card-footer {
        background-color: rgba(0, 0, 0, 0.03);
        border-top-color: rgba(140, 130, 115, 0.13);
    }
    .card-header-tabs {
        border-bottom-color: initial;
    }
    @media (min-width: 576px) {
        .card-group > .card + .card {
            border-left-color: initial;
        }
    }
    .accordion > .card:not(:last-of-type) {
        border-bottom-color: initial;
    }
    .breadcrumb {
        list-style-image: initial;
        background-color: rgb(35, 38, 39);
    }
    .breadcrumb-item + .breadcrumb-item::before {
        color: rgb(158, 150, 137);
    }
    .breadcrumb-item + .breadcrumb-item:hover::before {
        text-decoration-color: initial;
    }
    .breadcrumb-item + .breadcrumb-item:hover::before {
        text-decoration-color: initial;
    }
    .breadcrumb-item.active {
        color: rgb(158, 150, 137);
    }
    .pagination {
        list-style-image: initial;
    }
    .page-link {
        color: rgb(51, 162, 255);
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    .page-link:hover {
        color: rgb(97, 183, 255);
        text-decoration-color: initial;
        background-color: rgb(35, 38, 39);
        border-color: rgb(56, 61, 63);
    }
    .page-link:focus {
        outline-color: initial;
        box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
    }
    .page-item.active .page-link {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .page-item.disabled .page-link {
        color: rgb(158, 150, 137);
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    a.badge:focus,
    a.badge:hover {
        text-decoration-color: initial;
    }
    .badge-primary {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
    }
    a.badge-primary:focus,
    a.badge-primary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 78, 163);
    }
    a.badge-primary.focus,
    a.badge-primary:focus {
        outline-color: initial;
        box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-secondary {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
    }
    a.badge-secondary:focus,
    a.badge-secondary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(69, 74, 77);
    }
    a.badge-secondary.focus,
    a.badge-secondary:focus {
        outline-color: initial;
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-success {
        color: rgb(232, 230, 227);
        background-color: rgb(32, 134, 55);
    }
    a.badge-success:focus,
    a.badge-success:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 101, 42);
    }
    a.badge-success.focus,
    a.badge-success:focus {
        outline-color: initial;
        box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-info {
        color: rgb(232, 230, 227);
        background-color: rgb(18, 130, 147);
    }
    a.badge-info:focus,
    a.badge-info:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(14, 98, 111);
    }
    a.badge-info.focus,
    a.badge-info:focus {
        outline-color: initial;
        box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-warning {
        color: rgb(209, 205, 199);
        background-color: rgb(200, 150, 0);
    }
    a.badge-warning:focus,
    a.badge-warning:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(169, 126, 0);
    }
    a.badge-warning.focus,
    a.badge-warning:focus {
        outline-color: initial;
        box-shadow: rgba(200, 150, 0, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-danger {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
    }
    a.badge-danger:focus,
    a.badge-danger:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(151, 26, 38);
    }
    a.badge-danger.focus,
    a.badge-danger:focus {
        outline-color: initial;
        box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-light {
        color: rgb(209, 205, 199);
        background-color: rgb(27, 30, 31);
    }
    a.badge-light:focus,
    a.badge-light:hover {
        color: rgb(209, 205, 199);
        background-color: rgb(42, 45, 47);
    }
    a.badge-light.focus,
    a.badge-light:focus {
        outline-color: initial;
        box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
    }
    .badge-dark {
        color: rgb(232, 230, 227);
        background-color: rgb(44, 47, 49);
    }
    a.badge-dark:focus,
    a.badge-dark:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 27, 28);
    }
    a.badge-dark.focus,
    a.badge-dark:focus {
        outline-color: initial;
        box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
    }
    .jumbotron {
        background-color: rgb(35, 38, 39);
    }
    .alert {
        border-color: transparent;
    }
    .alert-heading {
        color: inherit;
    }
    .alert-dismissible .close {
        color: inherit;
    }
    .alert-primary {
        color: rgb(124, 195, 255);
        background-color: rgb(38, 42, 43);
        border-color: rgb(0, 59, 123);
    }
    .alert-primary hr {
        border-top-color: rgb(0, 63, 131);
    }
    .alert-primary .alert-link {
        color: rgb(206, 202, 195);
    }
    .alert-secondary {
        color: rgb(194, 188, 180);
        background-color: rgb(40, 43, 44);
        border-color: rgb(59, 64, 66);
    }
    .alert-secondary hr {
        border-top-color: rgb(63, 68, 70);
    }
    .alert-secondary .alert-link {
        color: rgb(210, 206, 200);
    }
    .alert-success {
        color: rgb(153, 230, 171);
        background-color: rgb(26, 62, 41);
        border-color: rgb(37, 90, 50);
    }
    .alert-success hr {
        border-top-color: rgb(39, 96, 52);
    }
    .alert-success .alert-link {
        color: rgb(214, 210, 205);
    }
    .alert-info {
        color: rgb(142, 227, 241);
        background-color: rgb(20, 59, 67);
        border-color: rgb(30, 89, 97);
    }
    .alert-info hr {
        border-top-color: rgb(32, 93, 103);
    }
    .alert-info .alert-link {
        color: rgb(214, 210, 205);
    }
    .alert-warning {
        color: rgb(251, 215, 112);
        background-color: rgb(81, 62, 0);
        border-color: rgb(123, 92, 0);
    }
    .alert-warning hr {
        border-top-color: rgb(130, 98, 0);
    }
    .alert-warning .alert-link {
        color: rgb(205, 200, 194);
    }
    .alert-danger {
        color: rgb(225, 134, 143);
        background-color: rgb(67, 12, 17);
        border-color: rgb(104, 18, 27);
    }
    .alert-danger hr {
        border-top-color: rgb(110, 20, 29);
    }
    .alert-danger .alert-link {
        color: rgb(203, 199, 192);
    }
    .alert-light {
        color: rgb(153, 144, 131);
        background-color: rgb(25, 27, 28);
        border-color: rgb(34, 34, 69);
    }
    .alert-light hr {
        border-top-color: rgb(35, 35, 75);
    }
    .alert-light .alert-link {
        color: rgb(166, 159, 147);
    }
    .alert-dark {
        color: rgb(213, 209, 204);
        background-color: rgb(46, 50, 52);
        border-color: rgb(64, 69, 71);
    }
    .alert-dark hr {
        border-top-color: rgb(67, 73, 75);
    }
    .alert-dark .alert-link {
        color: rgb(229, 227, 224);
    }
    .progress {
        background-color: rgb(35, 38, 39);
    }
    .progress-bar {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
    }
    .progress-bar-striped {
        background-image: linear-gradient(45deg,
        rgba(24, 26, 27, 0.15) 25%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 50%,
        rgba(24, 26, 27, 0.15) 50%,
        rgba(24, 26, 27, 0.15) 75%,
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0));
    }
    .list-group-item-action {
        color: rgb(181, 175, 166);
    }
    .list-group-item-action:focus,
    .list-group-item-action:hover {
        color: rgb(181, 175, 166);
        text-decoration-color: initial;
        background-color: rgb(27, 30, 31);
    }
    .list-group-item-action:active {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
    }
    .list-group-item {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.13);
    }
    .list-group-item.disabled,
    .list-group-item:disabled {
        color: rgb(158, 150, 137);
        background-color: rgb(24, 26, 27);
    }
    .list-group-item.active {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 98, 204);
        border-color: rgb(0, 86, 179);
    }
    .list-group-item-primary {
        color: rgb(124, 195, 255);
        background-color: rgb(44, 48, 50);
    }
    .list-group-item-primary.list-group-item-action:focus,
    .list-group-item-primary.list-group-item-action:hover {
        color: rgb(124, 195, 255);
        background-color: rgb(51, 55, 57);
    }
    .list-group-item-primary.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 51, 106);
        border-color: rgb(0, 104, 215);
    }
    .list-group-item-secondary {
        color: rgb(194, 188, 180);
        background-color: rgb(46, 50, 51);
    }
    .list-group-item-secondary.list-group-item-action:focus,
    .list-group-item-secondary.list-group-item-action:hover {
        color: rgb(194, 188, 180);
        background-color: rgb(53, 58, 60);
    }
    .list-group-item-secondary.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(46, 49, 51);
        border-color: rgb(120, 111, 99);
    }
    .list-group-item-success {
        color: rgb(153, 230, 171);
        background-color: rgb(30, 72, 48);
    }
    .list-group-item-success.list-group-item-action:focus,
    .list-group-item-success.list-group-item-action:hover {
        color: rgb(153, 230, 171);
        background-color: rgb(34, 83, 54);
    }
    .list-group-item-success.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(17, 70, 29);
        border-color: rgb(43, 179, 74);
    }
    .list-group-item-info {
        color: rgb(142, 227, 241);
        background-color: rgb(24, 71, 78);
    }
    .list-group-item-info.list-group-item-action:focus,
    .list-group-item-info.list-group-item-action:hover {
        color: rgb(142, 227, 241);
        background-color: rgb(28, 81, 89);
    }
    .list-group-item-info.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 67, 77);
        border-color: rgb(25, 173, 198);
    }
    .list-group-item-warning {
        color: rgb(251, 215, 112);
        background-color: rgb(92, 70, 0);
    }
    .list-group-item-warning.list-group-item-action:focus,
    .list-group-item-warning.list-group-item-action:hover {
        color: rgb(251, 215, 112);
        background-color: rgb(107, 81, 0);
    }
    .list-group-item-warning.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(106, 80, 3);
        border-color: rgb(208, 156, 6);
    }
    .list-group-item-danger {
        color: rgb(225, 134, 143);
        background-color: rgb(78, 14, 20);
    }
    .list-group-item-danger.list-group-item-action:focus,
    .list-group-item-danger.list-group-item-action:hover {
        color: rgb(225, 134, 143);
        background-color: rgb(91, 16, 24);
    }
    .list-group-item-danger.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(91, 22, 29);
        border-color: rgb(171, 42, 54);
    }
    .list-group-item-light {
        color: rgb(153, 144, 131);
        background-color: rgb(25, 27, 28);
    }
    .list-group-item-light.list-group-item-action:focus,
    .list-group-item-light.list-group-item-action:hover {
        color: rgb(153, 144, 131);
        background-color: rgb(32, 35, 36);
    }
    .list-group-item-light.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(95, 103, 107);
        border-color: rgb(83, 90, 94);
    }
    .list-group-item-dark {
        color: rgb(213, 209, 204);
        background-color: rgb(55, 60, 62);
    }
    .list-group-item-dark.list-group-item-action:focus,
    .list-group-item-dark.list-group-item-action:hover {
        color: rgb(213, 209, 204);
        background-color: rgb(62, 67, 70);
    }
    .list-group-item-dark.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(23, 24, 25);
        border-color: rgb(130, 121, 107);
    }
    .close {
        color: rgb(232, 230, 227);
        text-shadow: rgb(24, 26, 27) 0px 1px 0px;
    }
    .close:hover {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
    }
    button.close {
        background-color: transparent;
        border-color: initial;
    }
    .toast {
        background-color: rgba(24, 26, 27, 0.85);
        border-color: rgba(140, 130, 115, 0.1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
    }
    .toast-header {
        color: rgb(158, 150, 137);
        background-color: rgba(24, 26, 27, 0.85);
        border-bottom-color: rgba(140, 130, 115, 0.05);
    }
    .modal {
        outline-color: initial;
    }
    .modal-content {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.2);
        outline-color: initial;
    }
    .modal-backdrop {
        background-color: rgb(0, 0, 0);
    }
    .modal-header {
        border-bottom-color: rgb(56, 61, 63);
    }
    .modal-footer {
        border-top-color: rgb(56, 61, 63); 
    }
    .tooltip {
        text-decoration-color: initial; text-shadow: none; 
    }
    .tooltip .arrow::before {
        border-color: transparent; 
    }
    .bs-tooltip-auto[x-placement^='top'] .arrow::before,
    .bs-tooltip-top .arrow::before {
        border-top-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[x-placement^='right'] .arrow::before,
    .bs-tooltip-right .arrow::before {
        border-right-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[x-placement^='bottom'] .arrow::before,
    .bs-tooltip-bottom .arrow::before {
        border-bottom-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[x-placement^='left'] .arrow::before,
    .bs-tooltip-left .arrow::before {
        border-left-color: rgb(140, 130, 115);
    }
    .tooltip-inner {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 0, 0);
    }
    .popover {
        text-decoration-color: initial;
        text-shadow: none;
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.2); 
    }
    .popover .arrow::after, .popover .arrow::before {
        border-color: transparent; 
    }
    .bs-popover-auto[x-placement^='top'] > .arrow::before,
    .bs-popover-top > .arrow::before {
        border-top-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[x-placement^='top'] > .arrow::after,
    .bs-popover-top > .arrow::after {
        border-top-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[x-placement^='right'] > .arrow::before,
    .bs-popover-right > .arrow::before {
        border-right-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[x-placement^='right'] > .arrow::after,
    .bs-popover-right > .arrow::after {
        border-right-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[x-placement^='bottom'] > .arrow::before,
    .bs-popover-bottom > .arrow::before {
        border-bottom-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[x-placement^='bottom'] > .arrow::after,
    .bs-popover-bottom > .arrow::after {
        border-bottom-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[x-placement^='bottom'] .popover-header::before,
    .bs-popover-bottom .popover-header::before {
        border-bottom-color: rgb(50, 54, 57); 
    }
    .bs-popover-auto[x-placement^='left'] > .arrow::before,
    .bs-popover-left > .arrow::before {
        border-left-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[x-placement^='left'] > .arrow::after,
    .bs-popover-left > .arrow::after {
        border-left-color: rgb(48, 52, 54);
    }
    .popover-header {
        background-color: rgb(29, 31, 32);
        border-bottom-color: rgb(54, 58, 60);
    }
    .popover-body {
        color: rgb(209, 205, 199);
    }
    .carousel-control-next,
    .carousel-control-prev {
        color: rgb(232, 230, 227);
        background-image: initial;
        background-color: initial;
        border-color: initial;
    }
    .carousel-control-next:focus,
    .carousel-control-next:hover,
    .carousel-control-prev:focus,
    .carousel-control-prev:hover {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
        outline-color: initial;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        background-image: initial;
        background-color: initial;
    }
    .carousel-control-prev-icon {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z%27/%3e%3c/svg%3e');
    }
    .carousel-control-next-icon {
        background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23fff%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3e%3cpath d=%27M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z%27/%3e%3c/svg%3e');
    }
    .carousel-indicators {
        list-style-image: initial;
    }
    .carousel-indicators li {
        background-color: rgb(24, 26, 27);
        border-top-color: transparent;
        border-bottom-color: transparent;
    }
    .carousel-caption {
        color: rgb(232, 230, 227);
    }
    .spinner-border {
        border-color: currentcolor transparent currentcolor currentcolor;
    }
    .spinner-grow {
        background-color: currentcolor;
    }
    .bg-primary {
        background-color: rgb(0, 98, 204) !important;
    }
    a.bg-primary:focus,
    a.bg-primary:hover,
    button.bg-primary:focus,
    button.bg-primary:hover {
        background-color: rgb(0, 78, 163) !important;
    }
    .bg-secondary {
        background-color: rgb(88, 95, 99) !important;
    }
    a.bg-secondary:focus,
    a.bg-secondary:hover,
    button.bg-secondary:focus,
    button.bg-secondary:hover {
        background-color: rgb(69, 74, 77) !important;
    }
    .bg-success {
        background-color: rgb(32, 134, 55) !important;
    }
    a.bg-success:focus,
    a.bg-success:hover,
    button.bg-success:focus,
    button.bg-success:hover {
        background-color: rgb(24, 101, 42) !important;
    }
    .bg-info {
        background-color: rgb(18, 130, 147) !important;
    }
    a.bg-info:focus,
    a.bg-info:hover,
    button.bg-info:focus,
    button.bg-info:hover {
        background-color: rgb(14, 98, 111) !important;
    }
    .bg-warning {
        background-color: rgb(200, 150, 0) !important;
    }
    a.bg-warning:focus,
    a.bg-warning:hover,
    button.bg-warning:focus,
    button.bg-warning:hover {
        background-color: rgb(169, 126, 0) !important;
    }
    .bg-danger {
        background-color: rgb(165, 29, 42) !important;
    }
    a.bg-danger:focus,
    a.bg-danger:hover,
    button.bg-danger:focus,
    button.bg-danger:hover {
        background-color: rgb(151, 26, 38) !important;
    }
    .bg-light {
        background-color: rgb(27, 30, 31) !important;
    }
    a.bg-light:focus,
    a.bg-light:hover,
    button.bg-light:focus,
    button.bg-light:hover {
        background-color: rgb(42, 45, 47) !important;
    }
    .bg-dark {
        background-color: rgb(44, 47, 49) !important;
    }
    a.bg-dark:focus,
    a.bg-dark:hover,
    button.bg-dark:focus,
    button.bg-dark:hover {
        background-color: rgb(24, 27, 28) !important;
    }
    .bg-white {
        background-color: rgb(24, 26, 27) !important;
    }
    .bg-transparent {
        background-color: transparent !important;
    }
    .border {
        border-color: rgb(56, 61, 63) !important;
    }
    .border-top {
        border-top-color: rgb(56, 61, 63) !important;
    }
    .border-right {
        border-right-color: rgb(56, 61, 63) !important;
    }
    .border-bottom {
        border-bottom-color: rgb(56, 61, 63) !important;
    }
    .border-left {
        border-left-color: rgb(56, 61, 63) !important;
    }
    .border-0 {
        border-color: initial !important;
    }
    .border-top-0 {
        border-top-color: initial !important;
    }
    .border-right-0 {
        border-right-color: initial !important;
    }
    .border-bottom-0 {
        border-bottom-color: initial !important;
    }
    .border-left-0 {
        border-left-color: initial !important;
    }
    .border-primary {
        border-color: rgb(0, 86, 179) !important;
    }
    .border-secondary {
        border-color: rgb(102, 94, 83) !important;
    }
    .border-success {
        border-color: rgb(37, 156, 64) !important;
    }
    .border-info {
        border-color: rgb(21, 151, 171) !important;
    }
    .border-warning {
        border-color: rgb(176, 132, 0) !important;
    }
    .border-danger {
        border-color: rgb(148, 26, 37) !important;
    }
    .border-light {
        border-color: rgb(50, 54, 56) !important;
    }
    .border-dark {
        border-color: rgb(121, 112, 99) !important;
    }
    .border-white {
        border-color: rgb(48, 52, 54) !important;
    }
    .embed-responsive .embed-responsive-item,
    .embed-responsive embed,
    .embed-responsive iframe,
    .embed-responsive object,
    .embed-responsive video {
        border-color: initial;
    }
    .sr-only {
        border-color: initial;
    }
    .shadow-sm {
        box-shadow: rgba(0, 0, 0, 0.07) 0px 0.125rem 0.25rem !important;
    }
    .shadow {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important;
    }
    .shadow-lg {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 1rem 3rem !important;
    }
    .shadow-none {
        box-shadow: none !important;
    }
    .stretched-link::after {
        background-color: rgba(0, 0, 0, 0);
    }
    .text-white {
        color: rgb(232, 230, 227) !important;
    }
    .text-primary {
        color: rgb(51, 162, 255) !important;
    }
    a.text-primary:focus,
    a.text-primary:hover {
        color: rgb(97, 183, 255) !important;
    }
    .text-secondary {
        color: rgb(158, 150, 137) !important;
    }
    a.text-secondary:focus,
    a.text-secondary:hover {
        color: rgb(182, 176, 167) !important;
    }
    .text-success {
        color: rgb(97, 217, 124) !important;
    }
    a.text-success:focus,
    a.text-success:hover {
        color: rgb(140, 228, 161) !important;
    }
    .text-info {
        color: rgb(81, 212, 233) !important;
    }
    a.text-info:focus,
    a.text-info:hover {
        color: rgb(129, 223, 239) !important;
    }
    .text-warning {
        color: rgb(255, 199, 30) !important;
    }
    a.text-warning:focus,
    a.text-warning:hover {
        color: rgb(255, 209, 74) !important;
    }
    .text-danger {
        color: rgb(223, 70, 85) !important;
    }
    a.text-danger:focus,
    a.text-danger:hover {
        color: rgb(227, 95, 107) !important;
    }
    .text-light {
        color: rgb(228, 226, 222) !important;
    }
    a.text-light:focus,
    a.text-light:hover {
        color: rgb(204, 199, 193) !important;
    }
    .text-dark {
        color: rgb(195, 190, 182) !important;
    }
    a.text-dark:focus,
    a.text-dark:hover {
        color: rgb(219, 216, 212) !important;
    }
    .text-body {
        color: rgb(209, 205, 199) !important;
    }
    .text-muted {
        color: rgb(158, 150, 137) !important;
    }
    .text-black-50 {
        color: rgba(232, 230, 227, 0.5) !important;
    }
    .text-white-50 {
        color: rgba(232, 230, 227, 0.5) !important;
    }
    .text-hide {
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border-color: initial;
    }
    .text-decoration-none {
        text-decoration-color: initial !important;
    }
    .text-reset {
        color: inherit !important;
    }
    html,
    body,
    #root {
        background-color: rgb(24, 26, 27);
    }
    nav a {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
    }
    nav a:hover {
        color: rgb(187, 181, 172);
    }
    .fa-border {
        border-color: rgb(53, 57, 59);
    }
    .fa-inverse {
        color: rgb(232, 230, 227);
    }
    .sr-only {
        border-color: initial;
    }
    .card,
    .jumbotron {
        background-image: initial;
        background-color: rgb(29, 31, 32);
        border-color: rgba(124, 115, 102, 0.15);
        text-decoration-color: initial;
    }
    .card:hover,
    .cardform:hover,
    .cardlogin:hover,
    .jumbotron:hover {
        box-shadow: rgba(0, 0, 0, 0.40) 5px 10px 20px 1px !important;
    }
    a:last-of-type .linkback {
        color: rgb(255, 26, 26);
    }
    .cardform {
        background-image: initial;
        background-color: rgb(29, 31, 32); 
        border-color: rgba(124, 115, 102, 0.15);
        text-decoration-color: initial;
    }
    .cardlogin {
        background-image: initial;
        background-color: rgb(24, 26, 27);
        border-color: rgba(124, 115, 102, 0.15);
        text-decoration-color: initial;
    }

    /* Override Style */
    .vimvixen-hint {
        background-color: #7b5300 !important;
        border-color: #d8b013 !important;
        color: #f3e8c8 !important;
    }
    ::placeholder {
        opacity: 0.5 !important;
    }
    a[href='https://coinmarketcap.com/'] > svg[width='94'][height='16'] > path {
        fill: var(--darkreader-neutral-text) !important;
    }
    #edge-translate-panel-body,
    .MuiTypography-body1 {
        color: var(--darkreader-neutral-text) !important;
    }
    gr-main-header {
        background-color: #0f3a48 !important;
    }
    embed[type='application/pdf'] { filter: invert(100%) contrast(90%); }


    `

export default darkStyles;