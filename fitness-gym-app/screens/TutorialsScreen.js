import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import tutorialsData from '../assets/data.json'; 
import TutorialCard from '../components/TutorialCard';

const TutorialsScreen = () => {

  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(tutorialsData.tutorials); 
  }, []);

  return (
    <ScrollView>
      {tutorials.map((tutorial, index) => (
        <TutorialCard key={index}
        imageUrl={tutorial.image}
        lesson_name={tutorial.lesson_name}
        instructor_name={tutorial.instructor_name}
        duration={tutorial.duration}
        url={tutorial.url}
      />
      ))}
    </ScrollView>
  );
};

export default TutorialsScreen