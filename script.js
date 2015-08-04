$(function() {
    var $form = $('#form'),
        $formWrapper = $('#form-wrapper'),
        $formInputList = $form.find(':text'),
        $container = $('#data-container'),
        $buttonsWrapper = $('#buttons-wrapper'),
        buttonsData = {
            addClass: addClass,
            removeClass: removeClass,
            addTextNode: addTextNode,
            emptyContainer: emptyContainer,
            addElement: addElement,
            removeElement: removeElement,
            serializeAndShow: serializeAndShow
        };

    //form validation
    $form.on('submit', function (e) {
        e.preventDefault();

        $formInputList.each(function() {
            var $currentInput = $(this),
                errorClass = 'error';

            $currentInput.toggleClass(errorClass, !$currentInput.val());
        });
    });

    function addClass() {
        var classNameToAdd = prompt('Class name to add:');

        if (classNameToAdd) {
            $container.addClass(classNameToAdd);
        }
    }

    function removeClass() {
        var classNameToRemove = prompt('Class name to remove:');

        if (classNameToRemove) {
            $container.removeClass(classNameToRemove);
        }
    }

    function addTextNode() {
        var userInputText = prompt('Enter text:');

        if (userInputText) {
            $container.append('<p>' + userInputText + '</p>');
        }
    }

    function emptyContainer() {
        confirm('Delete all content from container?') && $container.html('');
    }

    function addElement() {
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

            $container.append($elem);
        }
    }

    function removeElement() {
        var elementToRemove = prompt('Selector to remove:');

        if (elementToRemove) {
            if ($container.has(elementToRemove).length) {
                $container.find(elementToRemove).remove();
            }
        }
    }

    function serializeAndShow() {
        var $existingTable = $('#table-1'),
            $table = $('<table>'),
            $tbody = $('<tbody>'),
            $tr;

        if ($existingTable.length) {
            $existingTable.remove();
        }

        $table.attr({
            id: 'table-1',
            'class': 'table table-responsive'
        });

        $table.append($tbody);

        $formInputList.each(function() {
            var $currentElement = $(this);

            $tr = $('<tr>');
            $tr.append('<td>' + $currentElement.attr('id') + '</td>');
            $tr.append('<td>' + $currentElement.val() + '</td>');
            $tbody.append($tr);
        });

        $formWrapper.append($table);
    }

    $buttonsWrapper.on('click', function (e) {
        var $target = $(e.target);
        e.preventDefault();

        if ($target.text()) {
            buttonsData[$target.text()]();
        }
    });
});
