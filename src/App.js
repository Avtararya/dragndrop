import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const finalSpaceCharacters = [
  {
    id: '1',
    image:
      'https://media.istockphoto.com/photos/premises-liability-book-with-a-court-hummer-picture-id1324909380?b=1&k=20&m=1324909380&s=170667a&w=0&h=JBaFpAH3t2-MU4DEzHiJRS5WxVAWAydeVu3-iWJkGVk=',
  },
  {
    id: '2',
    image:
      'https://media.istockphoto.com/photos/young-woman-leaving-picture-id1299310735?b=1&k=20&m=1299310735&s=170667a&w=0&h=EYbkIHkWWF7scKQ14spPLnD-aTXvtDlVMVL_9v5eSVg=',
  },
  {
    id: '3',
    image:
      'https://media.istockphoto.com/photos/question-mark-picture-id1310041415?b=1&k=20&m=1310041415&s=170667a&w=0&h=huWzOb0M6kn-m4CAQEcbBBLXCwkVJm78bqaKuq0HT6M=',
  },
  {
    id: '4',
    image:
      'https://media.istockphoto.com/photos/car-insurance-picture-id983801720?b=1&k=20&m=983801720&s=170667a&w=0&h=7lzv_D44sMhLr4a5hPejWAvgMV-qyxbM1GWUB2wZxKI=',
  },
  {
    id: '5',
    image:
      'https://media.istockphoto.com/photos/crowd-walking-over-binary-code-picture-id1185884207?b=1&k=20&m=1185884207&s=170667a&w=0&h=Sk8gtne8_inLN3W2N6NK7VtyKPB4rqFF3PCDUFf4u1M=',
  },
];

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {provided => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, image }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {provided => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={image} />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
