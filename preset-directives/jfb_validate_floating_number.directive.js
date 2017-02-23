/*
        JFB VALIDATE FLOATING NUMBER DIRECTIVE

        This directive validate that the content of the field where it's used is a float number.
        (Examples of float numbers: "7.2935" "-12.72" "1/2" "12.4e3"[Equivalent to 12.4 x 103] "4E-3"[Equivalent to 4 x 10-3])
        If the field is empty, it won't produce the validation alert.

        This directive allow this extra inline params:

            - jfb-validate-floating-number-message -> A string that contains the alert description text
                    showed in the message box. IMPORTANT: If this param is not set the message box will
                    contain the default message specified below, if this is set to empty string the message
                    box will be showed but with no message.
 */

jfbValidate.directive('jfbValidateFloatingNumber', ['jfbValidate', function(jfbValidate) {

    return {

        link: function (scope, element, attrs) {

            // DEFAULT MESSAGE FOR THIS ALERT:
            var default_alert_message = "This field must be a valid floating number."


            // INLINE ARGUMENTS:
            if (attrs.jfbValidateFloatingNumberMessage != null) {

                var text_message_box = attrs.jfbValidateFloatingNumberMessage;

            } else var text_message_box = default_alert_message;


            // VALIDATE CONDITION:
            var validate_condition = function(element_content) {

                if (element_content.length == 0) {

                    return true;

                } else {

                    if (/^[-+]?[0-9]+\.[0-9]+$/.test(element_content)) {

                        return true;

                    } else return false;
                }
            };


            // CALL CONFIG DIRECTIVE...
            jfbValidate.configDirective(element, attrs, validate_condition, text_message_box);
        }
    }
}]);