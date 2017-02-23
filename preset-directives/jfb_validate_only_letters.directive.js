/*
        JFB VALIDATE ONLY LETTERS DIRECTIVE

        This directive validate that the content of the field have only letters.
        Space character is allowed too.
        If the field is empty, it won't produce the validation alert.

        This directive allow this extra inline params:

            - jfb-validate-only-letters-message -> A string that contains the alert description text
                    showed in the message box. IMPORTANT: If this param is not set the message box will
                    contain the default message specified below, if this is set to empty string the message
                    box will be showed but with no message.
 */

jfbValidate.directive('jfbValidateOnlyLetters', ['jfbValidate', function(jfbValidate) {

    return {

        link: function (scope, element, attrs) {

            // DEFAULT MESSAGE FOR THIS ALERT:
            var default_alert_message = "This field can only contain letters."


            // INLINE ARGUMENTS:
            if (attrs.jfbValidateOnlyLettersMessage != null) {

                var text_message_box = attrs.jfbValidateOnlyLettersMessage;

            } else var text_message_box = default_alert_message;


            // VALIDATE CONDITION:
            var validate_condition = function(element_content) {

                if (element_content.length == 0) {

                    return true;

                } else {

                    if (/^[ A-Za-z]+$/.test(element_content)) {

                        return true;

                    } else return false; 
                } 
            };


            // CALL CONFIG DIRECTIVE...
            jfbValidate.configDirective(element, attrs, validate_condition, text_message_box);
        }
    }
}]);