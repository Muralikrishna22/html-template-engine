// src/components/ElementManager/ElementManager.js
import React, { useState } from 'react';
import ElementItem from './ElementItem';
import Toolbar from '../ToolBar';
import './styles.css';
import { getRandomColor } from '../../../utils';
import { elementTypes } from '../../../constants/elementTypes';

function ElementManager({
  rootElements,
  setRootElements,
  selectedElement,
  setSelectedElement
}) {
  const addElement = (parentId, type) => {
    let randomBg = type === 'div' ? getRandomColor() : 'transparent'

    const newElement = {
      id: Date.now(),
      type: type,
      name: (elementTypes?.find((obj) => obj.type === type)?.name || type),
      children: ['div', 'a', 'p'].includes(type) ? [] : null,
      style: {'background-color':randomBg, 'min-height':'50px', width:'100%', 'box-sizing': 'border-box', color:'black'},
      values: {},
      toolbarValues: {'background-color':randomBg, 'min-height':'50px', width:'100%','box-sizing': 'border-box',color:'black'},
    };
    if (parentId === null) {
      setRootElements([...rootElements, newElement]);
    } else {
      setRootElements(updateElements(rootElements, parentId, newElement));
    }
  };

  const updateElements = (elements, parentId, newElement) => {
    return elements.map((element) => {
      if (element.id === parentId && element.children) {
        return { ...element, children: [...element.children, newElement] };
      } else if (element.children) {
        return {
          ...element,
          children: updateElements(element.children, parentId, newElement),
        };
      }
      return element;
    });
  };

  const updateElementName = (id, newName) => {
    const updatedElements = updateElementNameRecursive(rootElements, id, newName);
    setRootElements(updatedElements);
  };

  const updateElementNameRecursive = (elements, id, newName) => {
    return elements.map((element) => {
      if (element.id === id) {
        return { ...element, name: newName };
      } else if (element.children) {
        return {
          ...element,
          children: updateElementNameRecursive(element.children, id, newName),
        };
      }
      return element;
    });
  };

  const onToggleOpen = (id) => {
    if (id !== rootElements?.[0]?.id) {
      const toggleElementOpen = (elementsList) => {
        return elementsList.map((element) => {
          if (element.id === id) {
            return { ...element, isOpen: !element.isOpen };
          }

          if (element.children && element.children.length > 0) {
            return {
              ...element,
              children: toggleElementOpen(element.children),
            };
          }

          return element;
        });
      };
      setRootElements(toggleElementOpen(rootElements));
    }
  };

  return (
    <div className="element-manager">
      <div className="header"> </div>

      <ElementItem
        elements={rootElements}
        onAddElement={addElement}
        parentType="div"
        onUpdateElement={updateElementName}
        setSelectedElement={setSelectedElement}
        onToggleOpen={onToggleOpen}
      />
    </div>
  );
}

export default ElementManager;
