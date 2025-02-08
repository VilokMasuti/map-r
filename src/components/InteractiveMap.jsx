import 'leaflet/dist/leaflet.css'; // Import Leaflet's default CSS for proper map styling
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const InteractiveMap = () => {
  /**
   * 📍 Define the geographical coordinates (latitude, longitude)
   * for Mathura, the birthplace of Lord Krishna.
   */
  const position = [27.4924, 77.6737];

  return (
    /**
     * 🗺️ MapContainer - This component initializes the interactive map.
     * It requires a center (latitude, longitude) and a zoom level.
     *
     * 🎨 Tailwind Styling:
     * - `h-screen w-full` -> Makes the map take up the full screen width and height.
     * - `rounded-lg shadow-xl` -> Adds rounded corners and shadow for a modern look.
     */
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] border border-gray-200 rounded-lg overflow-hidden shadow-xl">
        <MapContainer
          center={position} // Center the map at Krishna's birthplace
          zoom={13} // Set the initial zoom level
          className="h-full w-full rounded-lg"
        >
          {/*
            🌍 TileLayer - This component loads the map background from OpenStreetMap.
            It's responsible for rendering the geographical layout.
          */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/*
            📌 Marker - This represents a point of interest on the map.
            The `position` prop determines where the marker is placed.
          */}
          <Marker position={position}>
            {/*
              🏠 Popup - A small dialog box that appears when the marker is clicked.
              It provides information about the location.
            */}
            <Popup className="bg-white p-4 rounded-lg shadow-lg text-center">
              {/* 🏛️ Title: Displays the name of the location */}
              <h2 className="text-lg font-semibold text-blue-600 font-sans mb-2">
              Shree Krishna Janmabhoom
              </h2>

              {/* 📖 Description: A brief introduction to the significance of Mathura */}
              <p className="text-gray-700 text-sm leading-relaxed">
                Mathura is believed to be the birthplace of Lord Krishna, one of
                the most revered deities in Hinduism. The city is rich in
                culture, spirituality, and history.
              </p>

              {/* 🔗 Button: Redirects the user to an external page for more information */}
              <button
                onClick={() =>
                  window.open('https://en.wikipedia.org/wiki/Krishna', '_blank')
                }
                className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Learn More
              </button>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default InteractiveMap;
