$(function() {
    var $form = $('#form'),
        $formWrapper = $('#form-wrapper'),
        $formInputList = $form.find(':text'),
        $container = $('#container'),
        $buttonsWrapper = $('#buttons-wrapper'),
        buttonsData = {};

    buttonsData.addClass = addClass;
    buttonsData.removeClass = removeClass;
    buttonsData.addTextNode = addTextNode;
    buttonsData.emptyContainer = emptyContainer;
    buttonsData.addElement = addElement;
    buttonsData.removeElement = removeElement;
    buttonsData.serializeAndShow = serializeAndShow;

    //form validation
    $form.on('submit', function (e) {
        e.preventDefault();

        $formInputList.each(function() {
            var currentInput = $(this),
                errorClass = 'error';

            if (currentInput.val() === '') {
                if (currentInput.hasClass(errorClass)) {
                    return;
                }
                currentInput.addClass(errorClass);
            } else {
                currentInput.removeClass(errorClass);
            }
        });
    });

    function addClass() {
        var classNameToAdd = prompt('Class name to add:');

        if (classNameToAdd !== ''
            && classNameToAdd !== null
            && !($container.hasClass(classNameToAdd))) {
            $container.addClass(classNameToAdd);
        }
    }

    function removeClass() {
        var classNameToRemove = prompt('Class name to remove:');

        if (classNameToRemove !== '' && $container.hasClass(classNameToRemove)) {
            $container.removeClass(classNameToRemove);
        }
    }

    function addTextNode() {
        var userInputText = prompt('Enter text:');

        if (userInputText !== null && userInputText !== '') {
            $container.append('<p>' + userInputText + '</p>');
        }
    }

    function emptyContainer() {
        var userResponse = confirm('Delete all content from container?');
        if (userResponse) {
            $container.html('');
        }
    }

    function addElement() {
        var userInputElement,
            userInputElementId,
            userInputElementClass,
            $elem;

        userInputElement = prompt('Element name to add:');
        if (userInputElement !== '' && userInputElement !== null) {
            $elem = $('<' + userInputElement + '>');

            userInputElementId = prompt('ID');
            if (userInputElementId !== '' && userInputElementId !== null) {
                $elem.attr('id', userInputElementId);
            }

            userInputElementClass = prompt('Class');
            if (userInputElementClass !== '' && userInputElementClass !== null) {
                $elem.addClass(userInputElementClass);
            }

            $container.append($elem);
        }
    }

    function removeElement() {
        var elementToRemove = prompt('Selector to remove:');

        if (elementToRemove !== '' && elementToRemove !== null) {
            if ($container.has(elementToRemove).length > 0) {
                $container.find(elementToRemove).remove();
            }
        }
    }

    function serializeAndShow() {
        var $existingTable = $('#table-1'),
            $table,
            $tbody,
            $tr;

        if ($existingTable.length > 0) {
            $existingTable.remove();
        }

        $table = $('<table>');
        $table.attr({
            id: 'table-1',
            'class': 'table table-responsive'
        });

        $tbody = $('<tbody>');
        $table.append($tbody);

        $formInputList.each(function() {
            $tr = $('<tr>');
            $tr.append('<td>' + $(this).attr('id') + '</td>');
            $tr.append('<td>' + $(this).val() + '</td>');
            $tbody.append($tr);
        });

        $formWrapper.append($table);

    }

    $buttonsWrapper.on('click', function (e) {
        var $target = e.target;
        e.preventDefault();

        if ($target.value) {
            buttonsData[$target.value]();
        }
    });
});
