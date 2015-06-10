/* ===== Calendar ===== */
myApp.onPageInit("calendar", function(page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: "#ks-calendar-default",
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: "#ks-calendar-date-format",
        dateFormat: "DD, MM dd, yyyy"
    });
    // With multiple values
    var calendarMultiple = myApp.calendar({
        input: "#ks-calendar-multiple",
        dateFormat: "M dd yyyy",
        multiple: true
    });
    // Inline with custom toolbar
    //var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var calendarInline = myApp.calendar({
        container: "#ks-calendar-inline-container",
        value: [new Date()],
        weekHeader: false,
        toolbarTemplate:
            "<div class=\"toolbar calendar-custom-toolbar\">" +
                "<div class=\"toolbar-inner\">" +
                "<div class=\"left\">" +
                "<a href=\"#\" class=\"link icon-only\"><i class=\"icon icon-back\"></i></a>" +
                "</div>" +
                "<div class=\"center\"></div>" +
                "<div class=\"right\">" +
                "<a href=\"#\" class=\"link icon-only\"><i class=\"icon icon-forward\"></i></a>" +
                "</div>" +
                "</div>" +
                "</div>",
        onOpen: function(p) {
            $$(".calendar-custom-toolbar .center").text(monthNames[p.currentMonth] + ", " + p.currentYear);
            $$(".calendar-custom-toolbar .left .link").on("click", function() {
                calendarInline.prevMonth();
            });
            $$(".calendar-custom-toolbar .right .link").on("click", function() {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function(p) {
            $$(".calendar-custom-toolbar .center").text(monthNames[p.currentMonth] + ", " + p.currentYear);
        },
        onChange: function (p, values, displayValues) {
            console.log(p);
            console.log(values);
            console.log(displayValues);
        }
    });
});