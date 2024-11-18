const toggleButton = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const toggleIcon = document.getElementById('toggleIcon');

        toggleButton?.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                sidebar.style.display = 'none';
                document.body.style.marginLeft = '0'; // Reset content
                toggleButton.setAttribute('aria-expanded', 'false');
                toggleIcon.textContent = '☰ الفهرس'
            } else {
                sidebar.style.display = 'block';
                document.body.style.marginLeft = '250px'; // Shift content
                toggleButton.setAttribute('aria-expanded', 'true');
                toggleIcon.textContent = '☰'; // Change icon to indicate open
            }
        });

        // Function to handle screen resizing
        function handleResize() {
            if (window.innerWidth >= 768) {
                sidebar.style.display = 'block'; // Show sidebar on medium and large screens
                document.body.style.marginLeft = '250px'; // Adjust content margin
                toggleButton.style.display = 'none'; // Hide toggle button
            } else {
                sidebar.style.display = 'none'; // Hide sidebar on small screens
                document.body.style.marginLeft = '0'; // Reset content margin
                toggleButton.style.display = 'block'; // Show toggle button
            }
        }

        // Add event listener for resize
        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();

        let baseUrl = "https://localhost:44363/documentations/documentation-pages/index.html"


        function showIframe(queryDestaination) {
            const iframe = document.getElementById('iframe');
            let query = window.location.search 
            queryDestaination = queryDestaination?? query.split("=")[1]
            
            let iframeDocumentaionSrc
            if(query.includes("page=")){
                iframeDocumentaionSrc = `/documentation-pages/${queryDestaination}`
            }else{
                iframeDocumentaionSrc = "/documentation-pages/Accounting/intro.html"
            }         
            iframe.src = iframeDocumentaionSrc;            
        }
        showIframe()

    const carets = document.querySelectorAll('.caret');

    carets.forEach(caret => {
    caret.addEventListener('click', function() {
        // Toggle the active class for the nested <ul>
        const nestedList = caret.nextElementSibling;
        if (nestedList) {
            nestedList.classList.toggle('active');
        }

        // Toggle the caret symbol (you can use icons or change text)
        caret.classList.toggle('caret-down');
        });
    });