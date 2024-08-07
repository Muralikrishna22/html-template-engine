import React, { useState, useEffect, useRef } from 'react';
import { elementTypes } from '../../../../constants/elementTypes';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function ElementItem({ elements, onAddElement, parentType, onUpdateElement, setSelectedElement, onToggleOpen }) {
  const [showOptions, setShowOptions] = useState(false);
  const [editingName, setEditingName] = useState(null);
  const [newName, setNewName] = useState('');
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAddClick = (e, parent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowOptions(parent);
  };

  const handleAuxClick = (e) => {
    e.preventDefault(); 
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (type) => {
    onAddElement(showOptions?.id, type);
    setShowOptions(false);
  };

  const toggleOpen = (e, element) => {
    setSelectedElement(element);
    onToggleOpen(element.id);
  };

  const startEditing = (id, currentName) => {
    setEditingName(id);
    setNewName(currentName);
  };

  const stopEditing = (id) => {
    if (newName.trim() !== '') {
      onUpdateElement(id, newName);
    }
    setEditingName(null);
  };

  const getAllowedTypes = () => {
    switch (parentType) {
      case 'div':
        return ['div', 'a', 'p', 'span', 'img'];
      case 'a':
        return ['div', 'p', 'span', 'img'];
      case 'p':
        return ['span'];
      case 'span':
      case 'img':
      default:
        return []; // No children allowed
    }
  };

  const allowedTypes = getAllowedTypes();

  return (
    <div className="element-item">
      {elements.map((element) => (
        <div key={element.id} className="item">
          <div className="element-header" onClick={(e) => toggleOpen(e, element)}>
            {editingName === element.id ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={() => stopEditing(element.id)}
                autoFocus
              />
            ) : (
              <span className={'element-name'} onDoubleClick={() => startEditing(element.id, element.name)}>
                {element.name}
              </span>
            )}
            <div>
              {allowedTypes.length > 0 && (
                <>
                  <button onClick={(e) => handleAddClick(e, element)}>+</button>
                  <button className="toggle-btn">
                    {element.isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </button>
                </>
              )}
            </div>
          </div>
          {element.children && element.isOpen && (
            <ElementItem
              key={element.id}
              elements={element.children}
              onAddElement={onAddElement}
              parentType={element.type}
              onUpdateElement={onUpdateElement}
              setSelectedElement={setSelectedElement}
              onToggleOpen={onToggleOpen}
            />
          )}

          {allowedTypes.length > 0 &&
            showOptions && (
              <div className="add-element" ref={optionsRef}>

                <div className="element-options">
                  {elementTypes
                    .filter((e) => allowedTypes.includes(e.type))
                    .map(({ type, icon, name }) => (
                      <button key={type} onClick={() => handleOptionClick(type, element)}>
                        {icon} {name.toUpperCase()}
                      </button>
                    ))}
                </div>
              </div>
            )
          }
        </div>
      ))}
    </div>
  );
}

export default ElementItem;
