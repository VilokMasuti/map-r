import 'leaflet/dist/leaflet.css'; // Import Leaflet's default CSS for proper map styling
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const InteractiveMap = () => {
  /**
   * 📍 Define the geographical coordinates (latitude, longitude)
   * for Kurukshetra, the site of the great Mahabharata battle.
   */
  const position = [29.9695, 76.8783]; // Coordinates for Kurukshetra

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
          center={position} // Center the map at Kurukshetra
          zoom={13} // Set the initial zoom level
          className="h-full w-full rounded-lg"
        >
          {/* 🌍 TileLayer - This component loads the map background from OpenStreetMap. */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* 📌 Marker - Marks Kurukshetra on the map */}
          <Marker position={position}>
            {/* 🏠 Popup - Displays historical information about Kurukshetra */}
            <Popup className="bg-white p-4 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold text-red-600 font-sans mb-2">
                Kurukshetra - The Battlefield of Mahabharata
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed">
                Kurukshetra is the legendary battlefield where the epic war of
                Mahabharata took place between the Pandavas and Kauravas. It is
                considered a sacred land in Hinduism and a place of deep
                historical importance.
              </p>

              {/* 🔗 Button: Redirects the user to more information about Mahabharata */}
              <button
                onClick={() =>
                  window.open(
                    'https://en.wikipedia.org/wiki/Mahabharata',
                    '_blank'
                  )
                }
                className="mt-4 w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition duration-300"
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
