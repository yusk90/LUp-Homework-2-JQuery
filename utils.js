function Utils() {
}

Utils.addClass = function (selector) {
    $(selector).addClass(prompt('Class name to add:'));
};

Utils.removeClass = function (selector) {
    $(selector).removeClass(prompt('Class name to remove:'));
};

Utils.addTextNode = function (selector) {
    var userInputText = prompt('Enter text:');

    if (userInputText) {
        $(selector).append('<p>' + userInputText + '</p>');
    }
};

Utils.emptyContainer = function (selector) {
    confirm('Delete all content from container?') && $(selector).html('');
};

Utils.addElement = function (selector) {
    var userInputElementClass,
        userInputElementId,
        userInputElement,
        $elem;

    userInputElement = prompt('Element name to add:');

    if (userInputElement) {
        $elem = $('<' + userInputElement + '>');

        userInputElementId = prompt('ID');
        if (userInputElementId) {
            $elem.attr('id', userInputElementId);
        }

        userInputElementClass = prompt('Class');
        if (userInputElementClass) {
            $elem.addClass(userInputElementClass);
        }

        $(selector).append($elem);
    }
};

Utils.removeElement = function (selector) {
    var elementToRemove = prompt('Selector to remove:'),
        $parentElement = $(selector);

    if (elementToRemove) {
        if ($parentElement.has(elementToRemove).length) {
            $parentElement.find(elementToRemove).remove();
        }
    }
};

Utils.serializeAndShow = function (selector, appendTo) {
    var $existingTable = $('#table-1'),
        $formInputList = $(selector).find(':text'),
        $table = $('<table>'),
        $tbody = $('<tbody>');

    if ($existingTable.length) {
        $existingTable.remove();
    }

    $table.attr({
        id: 'table-1',
        class: 'table table-responsive'
    });

    $table.append($tbody);

    $formInputList.each(function () {
        var $currentElement = $(this),
            $tr = $('<tr>');

        $tr.append('<td>' + $currentElement.attr('id') + '</td>');
        $tr.append('<td>' + $currentElement.val() + '</td>');
        $tbody.append($tr);
    });

    $(appendTo).append($table);
};

Utils.validateForm = function (formSelector) {
    $(formSelector).find(':text').each(function () {
        var $currentInput = $(this);
        $currentInput.toggleClass('error', !$currentInput.val());
    });
};
