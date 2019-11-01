        var f = document.createElement('iframe');
        f.srcdoc = "<script>var f = document.createElement('iframe');f.src = 'https://m.taobao.com';f.style.position = 'absolute';f.style.border = '0';f.style.left = 0;f.style.top = 0;f.style.width = '100%';f.style.height = '100%';document.body.append(f);</script>"
        f.style.position = 'absolute';
        f.style.border = '0';
        f.style.left = 0;
        f.style.top = 0;
        f.style.width = '100%';
        f.style.height = '100%';
        document.body.append(f);
