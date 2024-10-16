$(document).ready(function () {
    $('.service-card').click(function () {
        const title = $(this).data('title');
        const description = $(this).data('description');
        $('#serviceModalLabel').text(title);
        $('#modalDescription').text(description);
    });

    // Smooth scroll to top functionality
    $('a[href="#top"]').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false; // Prevent default anchor behavior
    });
});