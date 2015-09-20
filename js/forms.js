SERVER_ADDR = 'https://abh-server.herokuapp.com';

$('#scatter-form').click(function() {
  var $submitBtn = $(this);
  var $weight = $('#weight');
  var $height = $('#height');

  submitScatterForm('#example-scatter-chart', $weight.val(), $height.val());
});

function submitScatterForm(chartSelector, weight, height) {
  var validatedForm = validateForm(weight, length);
  if (!validatedForm.valid) {
    $(validatedForm.msg).insertAfter(chartSelector);
    return;
  }

  // var url = SERVER_ADDR + '/weight_height';
  // $.getJSON(url, {weight: weight, height: height}, function(json, textStatus) {
    $('<p>Thank you!</p>').insertAfter(chartSelector);
    Chartkick.updateChart(chartId.replace('#', ''));
  // });
}

function validateForm(weight, length) {
  var formValid = true;
  var validationMsg = '';

  if (!isValidHeight(height)) {
    validationMsg += createTag('p', createTag('strong', 'Length: ') + 'must be a number and of lenght 3.');
    formValid = false;
  }
  if (!isValidWeight(weight)) {
    validationMsg += createTag('p', createTag('strong', 'Weight: ') + 'must be a number and of lenght 2 or 3.');
    formValid = false;
  }

  return {
    valid: formValid,
    msg: validationMsg
  };
}

function isValidWeight(weight) {
  if (!isNumber(weight)) return false;
  if (weight.length !== 2 || weight.length !== 3) return false;
  return true;
}

function isValidHeight(height) {
  if (!isNumber(height)) return false;
  if (weight.length !== 3) return false;
  return true;
}

function isNumber(n) {
  return parseInt(n, 10) !== NaN;
}

function createTag(tag, content) {
  return '<' + tag '>' + content + '</' + tag '>';
}
