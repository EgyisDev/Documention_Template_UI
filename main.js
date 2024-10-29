const toggleButton = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const toggleIcon = document.getElementById('toggleIcon');

        toggleButton.addEventListener('click', () => {
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