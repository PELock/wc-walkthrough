import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ChronologicalOrderQuestion = ({
  question,
  events,
  correctOrder,
  onAnswer,
}) => {
  // Initialize state with events
  const [items, setItems] = useState(events);
  const [error, setError] = useState("");

  // Handle drag end event
  const handleDragEnd = (result) => {
    if (!result.destination) return; // If no valid drop target, return early

    // Create a new array based on current state
    const newItems = Array.from(items);
    // Remove item from source index
    const [movedItem] = newItems.splice(result.source.index, 1);
    // Insert item at destination index
    newItems.splice(result.destination.index, 0, movedItem);

    // Update state with new order
    setItems(newItems);

    // Check if current order matches correctOrder
    const isCorrect = newItems.every(
      (item, index) => item.id === correctOrder[index].id
    );

    // Update error state based on correctness
    if (isCorrect) {
      onAnswer(true);
      setError("");
    } else {
      onAnswer(false);
      setError("Incorrect order, please try again.");
    }
  };

  return (
    
      <div className="flex justify-center flex-col items-center ">
        <p className="font-bold text-center">{question}</p>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={question}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full max-w-2xl p-5"
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-4  border border-stone-900 bg-stone-950 rounded-sm text-center"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    
  );
};

export default ChronologicalOrderQuestion;
