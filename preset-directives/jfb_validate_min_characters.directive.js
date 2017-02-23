/*
        JFB VALIDATE MIN CHARACTERS DIRECTIVE

        This directive validate that the field where it's used have a minium number of characters.
        This directive allow this extra inline params:

            - jfb-validate-min-characters -> (Main param) Minium number of characters that the field must contain.

            - jfb-validate-min-characters-message -> A string that contains the alert description text
                    showed in the message box. IMPORTANT: If this param is not set the message box will
                    contain the default message specified below, if this is set to empty string the message
                    box will be showed but with no message.
 */

jfbValidate.directive('jfbValidateMinCharacters', ['jfbValidate', function(jfbValidate) {

    return {

        link: function (scope, element, attrs) {

            
            // MAIN ARGUMENT:
            if (attrs.jfbValidateMinCharacters != null) {

                var min_characters = attrs.jfbValidateMinCharacters;

            } else var min_characters = 0;


            // DEFAULT MESSAGE FOR THIS ALERT:
            var default_alert_message = "The minium number of characters for this field is " + min_characters + ".";


            // INLINE ARGUMENTS:
            if (attrs.jfbValidateMinCharactersMessage != null) {

                var text_message_box = attrs.jfbValidateMinCharactersMessage;

            } else var text_message_box = default_alert_message;
            
 
            // VALIDATE CONDITION:
            var validate_condition = function(element_content) {

                return (element_content.length >= min_characters);
            };


            // CALL CONFIG DIRECTIVE...
            jfbValidate.configDirective(element, attrs, validate_condition, text_message_box);
        }
    }
}]);