/*
        JFB VALIDATE IS VALID DATE DIRECTIVE

        This directive validate that the content of the field where it's used is a valid date.
        (Valid: 30/11/1992  Invalid: 3/2/11/1992, 23/103, 32/11/1992, 30/2/2003, ...)
        Valid date separators: - /
        If the field is empty, it won't produce the validation alert.

        This directive allow this extra inline params:

            - jfb-validate-is-email-message -> A string that contains the alert description text
                    showed in the message box. IMPORTANT: If this param is not set the message box will
                    contain the default message specified below, if this is set to empty string the message
                    box will be showed but with no message.
 */

jfbValidate.directive('jfbValidateIsValidDate', ['jfbValidate', function(jfbValidate) {

    return {

        link: function (scope, element, attrs) {

            // DEFAULT MESSAGE FOR THIS ALERT:
            var default_alert_message = "This field must be a valid date. (DD/MM/YYY)"


            // INLINE ARGUMENTS:
            if (attrs.jfbValidateIsValidDateMessage != null) {

                var text_message_box = attrs.jfbValidateIsValidDateMessage;

            } else var text_message_box = default_alert_message;


            // VALIDATE CONDITION:
            var validate_condition = function(element_content) {

                if (element_content.length == 0) {

                    return true;

                } else {

                    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

                    // Match the date format through regular expression
                    if(element_content.match(dateformat)) {

                        //Test which seperator is used '/' or '-'
                        var opera1 = element_content.split('/');
                        var opera2 = element_content.split('-');

                        lopera1 = opera1.length;
                        lopera2 = opera2.length;

                        // Extract the string into month, date and year
                        if (lopera1 > 1) {

                            var pdate = element_content.split('/');

                        } else if (lopera2 > 1) {

                            var pdate = element_content.split('-');
                        }

                        var dd = parseInt(pdate[0]);
                        var mm  = parseInt(pdate[1]);
                        var yy = parseInt(pdate[2]);

                        // Create list of days of a month [assume there is no leap year by default]
                        var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

                        if (mm == 1 || mm > 2) {

                            if (dd > ListofDays[mm - 1]) {

                                return false;
                            }
                        }
                        if (mm == 2) {

                            var lyear = false;

                            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {

                                lyear = true;
                            }

                            if ((lyear == false) && (dd >= 29)) {
                            
                                return false;
                            }

                            if ((lyear==true) && (dd>29)) {
                            
                                return false;
                            }
                        }

                    } else {
                            
                        return false;
                    }

                    return true;
                }
            };


            // CALL CONFIG DIRECTIVE...
            jfbValidate.configDirective(element, attrs, validate_condition, text_message_box);
        }
    }
}]);