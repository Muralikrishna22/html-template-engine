import React, { useState } from 'react';
import ElementManager from './ElementManager'
import Toolbar from './ToolBar';
import './styles.css';
import Viewer from './Viewer';

const Editor = () => {
  const [rootElements, setRootElements] = useState([
      { id: Date.now(), type: 'div', name: 'Template', children: [], style: {'overflow':'hidden'}, values:{} }
  ]);
  const [selectedElement, setSelectedElement] = useState(null);

  const updateElementprops = (props) => {
      const updatedElements = updateElementpropsRecursive(rootElements, selectedElement.id, props);
      setRootElements(updatedElements);
  };

  const updateElementpropsRecursive = (elements, id, props) => {
    return elements.map((element) => {
      if (element.id === id) {
        return { ...element, ...(props.values || {}), style: { ...element.style, ...(props.styles || {}) }, values:{...(props.values || {})} };
      } else if (element.children) {
        return {
          ...element,
          children: updateElementpropsRecursive(element.children, id, props),
        };
      }
      return element;
    });
  };

  return (
    <div className="editor-block">
      <ElementManager
        rootElements={rootElements}
        setRootElements={setRootElements}
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
      />
      
      <Viewer rootElements={rootElements} />

      {selectedElement && <Toolbar
        element={selectedElement}
        onUpdateElementProps={updateElementprops}
      />}
    </div>
  );
}

export default Editor
