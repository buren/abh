// Server address for posting weight/height data
var WEIGHT_HEIGHT_POST_URL = SERVER_ADDR + '/weight_height';
// HTML attribute name for indicating that the form has previously been submitted successfully
SUBMIT_ATTR_NAME = 'data-submitted';
// Form selector
SCATTER_SUBMIT_SELECTOR = '#scatter-form';
// Input selectors
WEIGHT_SELECTOR = '#weight';
HEIGHT_SELECTOR = '#height';
SCATTER_INPUTS_SELECTOR = [WEIGHT_SELECTOR, HEIGHT_SELECTOR].join(', ');

// On clicking the "Submit" button
$(SCATTER_SUBMIT_SELECTOR).click(function() {
  submitScatterForm(getPhysicalInputs()); // Submit form
});

// On each keypress
$(SCATTER_INPUTS_SELECTOR).keypress(function (e) {
  // If ENTER key
  if (e.which === 13) {
    submitScatterForm(getPhysicalInputs()); // Submit form
  }
});

function getPhysicalInputs() {
  return {
    weight: $(WEIGHT_SELECTOR).val(), // Get weight input value
    height: $(HEIGHT_SELECTOR).val()  // Get height input value
  };
}

// Logic for handlig the submit action
function submitScatterForm(inputs) {
  var weight = inputs.weight;
  var height = inputs.height;
  var $msgBox = $('#msg-box'); // Get the msg box element
  var validatedForm = validateForm(weight, height); // Validate the form
  if (!validatedForm.valid) {
    // If the form is invalid set the error message and return
    $msgBox.html(validatedForm.msg);
    return;
  }

  // The form is valid post data to server
  postData(weight, height, function() {
    // Get message to display when the forms is valid
    var msg = validFormMsg($msgBox);

    $msgBox.html(createTag('h3', msg));    // Set the content of the message box
    $msgBox.attr(SUBMIT_ATTR_NAME, true); // Set that form has been submitted
  });
}

// Logic for sending weight/height data to server
function postData(weight, height, callback) {
  var formData = { weight: weight, height: height }; // Package form data

  // Send a GET request to the server, but it would be better if it was a POST
  $.getJSON(WEIGHT_HEIGHT_POST_URL, formData, function(json, textStatus) {
    callback(); // Request complete invoke the callback function
  });
}


// If the form hasn't previously been submitted say thanks
// otherwise tell them to keep spamming
function validFormMsg($msgBox) {
  return $msgBox.attr(SUBMIT_ATTR_NAME) === 'true' ? 'Keep spamming :)' : 'Thank you!';
}

// Validate weight/height form
function validateForm(weight, height) {
  var formValid = true;   // Form is assumed to be valid
  var validationMsg = ''; // Full validation msg

  // Validate the height value
  if (!isValidHeight(height)) {
    // Height value is invalid add height validation error message
    validationMsg += validationErrorMsg('Height');
    formValid = false; // The form in invalid
  }
  // Validate the weight value
  if (!isValidWeight(weight)) {
    // Weight value is invalid add weight validation error message
    validationMsg += validationErrorMsg('Weight');
    formValid = false; // The form in invalid
  }

  // Return an object with two values: valid & msg
  return {
    valid: formValid,
    msg: validationMsg
  };
}

// Returns validation err message
function validationErrorMsg(label) {
  return createTag('p', createTag('strong', label + ': ') + 'must be a number and resonable.');
}

// Returns true if the weight is valid false otherwise
function isValidWeight(weight) {
  var minWeight = 40;
  var maxWeight = 600;
  if (!isNumber(weight)) return false;
  weight = toInt(weight);
  if (weight < minWeight || weight > maxWeight) return false;
  return true;
}

// Returns true if the height is valid false otherwise
function isValidHeight(height) {
  var minHeight = 120;
  var maxHeight = 230;
  if (!isNumber(height)) return false;
  height = toInt(height);
  if (height < minHeight || height > maxHeight) return false;
  return true;
}

// Returns true n is a number or can be converted into one
function isNumber(n) {
  return !isNaN(toInt(n));
}

// Convert to int
function toInt(n) {
  return parseInt(n, 10);
}

// Create HTML-tag
// example:
//  createTag('p', 'Hello world!') // "<p>Hello world!</p>"
function createTag(tag, content) {
  return '<' + tag + '>' +
            content +
         '</' + tag + '>';
}
