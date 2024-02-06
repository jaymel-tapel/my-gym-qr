import { useState } from 'react';
import Header from './components/header';
import './App.css';
import floor from './assets/floor.jpg';


function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <>
      <Header />
      <div className="flex bg-repeat min-h-screen" style={{ backgroundImage: `url(${floor})`, backgroundSize: '200px' }}>
        <div className="p-10 ">
          <img src="https://homegymreview.co.uk/wp-content/uploads/exercises/01971101-Cable-Pulldown-pro-lat-bar_Back_max-2048x1595.jpg" alt="Lat Pulldown" className="d-block max-w-full" />

          <div className="mt-8 flex justify-between text-white">
            <h1 className="text-lg font-bold" style={{ fontFamily: 'Saira Stencil One' }}>Maschinenname</h1>
            <p className="text-lg">Lat pulldown</p>
          </div>

          <div className="mt-4 flex justify-between text-white">
            <h1 className="text-lg font-bold" style={{ fontFamily: 'Saira Stencil One' }}>Zielmuskel</h1>
            <p className="text-lg">Rücken</p>
          </div>

          <div className="mt-4 flex flex-col ">
            <button className="bg-red-500 text-white py-2 px-4 rounded mb-4" onClick={toggleInstructions}>
                Wie man die Maschine benutzt
            </button>

            {showInstructions && (
              <div className='mb-8'>

                <div className="mt-8">
                  <div className="iframe-container" style={{ position: 'relative', paddingTop: '56.25%' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/trZQjegcRx0?si=Fm16XnFLUO2wbA3a"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: '0', left: '0' }}
                    ></iframe>
                  </div>
                </div>

                <p className='mt-4 text-white'>Bereiten Sie die Maschine vor, indem Sie das Kniepolster so einstellen, dass es eng an Ihren Oberschenkeln anliegt, ohne übermäßigen Druck auszuüben, und setzen Sie den Stift auf ein handhabbares Gewicht für mindestens zehn Wiederholungen ein.</p>
                <p className='mt-4 text-white'>Positionieren Sie sich, indem Sie stehend den Griff mit einem weiten Überhandgriff ergreifen, dann setzen Sie sich und sichern Sie Ihre Beine unter dem Polster, wobei Sie darauf achten, dass Ihre Arme gestreckt, Schultern zurück und unten sind.</p>
                <p className='mt-4 text-white'>Führen Sie die Übung aus, indem Sie das Gewicht mit Ihren Ellenbogen nach unten ziehen, halten Sie diese eingezogen und in Linie mit Ihrem Oberkörper, ziehen Sie zu Ihrer oberen Brust, halten, und dann strecken Sie Ihre Arme vollständig aus, während Sie ausatmen.</p>

              </div>
            )}

            <button className="bg-gray-500 text-white py-2 px-4 rounded mb-4">
              Einen Trainer anfordern
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded mb-4">
              Mit unserem WIFI verbinden
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded mb-4">
              Schreiben Sie uns eine Bewertung
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
