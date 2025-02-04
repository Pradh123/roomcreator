// components/Amenities.js
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faFloppyDisk,
  faTrash,
  faEdit,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Amenities = () => {
  const [amenities, setAmenities] = useState('');
  const [amenitiesList, setAmenitiesList] = useState([]);
  const [amenitiesId, setAmenitiesId] = useState(null);
  const [amenitiesValue, setAmenitiesValue] = useState('');

  useEffect(() => {
    fetchBhkList();
  }, []);

  const fetchBhkList = async () => {
    const response = await fetch('/api/amenities',{method:"GET"});
    const data = await response.json();
    setAmenitiesList(data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/amenities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add', amenities }),
    });
    setAmenities('');
    fetchBhkList();
    toast.success('Amenities type added successfully!', {
      style: { backgroundColor: 'green', color: 'white' }, // Green for add
    });
  };

  const handleEdit = async (id) => {
    await fetch('/api/amenities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'edit', amenitiesId: id, amenities: amenitiesValue }),
    });
    setAmenitiesId(null);
    fetchBhkList();
    toast.success('Amenities type updated successfully!', {
      style: { backgroundColor: 'skyblue', color: 'black' }, // Skyblue for edit
    });
  };

  const handleDelete = async (id) => {
    await fetch('/api/amenities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', amenitiesId: id }),
    });
    fetchBhkList();
    toast.success('Amenities type deleted successfully!', {
      style: { backgroundColor: 'red', color: 'white' }, // Red for delete
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 rounded">
        <div className="shadow-[0_0px_10px_-3px_rgba(0,0,0,0.3)] p-4 rounded-md bg-white border-l-2 border-teal-600">
          <form onSubmit={handleSubmit} className="flex items-end justify-between gap-3">
            <div className="grow flex flex-col">
              <label htmlFor="" className="pb-2 font-semibold text-para">
                Amenities
              </label>
              <input
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                type="text"
                className="border rounded-md h-8 px-2 text-para grow focus:border-black font-sans outline-none"
                placeholder="Enter Amenities Type"
              />
            </div>
            <button type="submit">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-xl hover:text-primary cursor-pointer mb-1"
              />
            </button>
          </form>

          <div className="text-[15px] border p-2 h-60 overflow-y-auto rounded mt-3">
            {amenitiesList.map((item) => (
              <div key={item._id} className="even:bg-slate-50">
                <div className="flex justify-between px-1">
                  <p className="capitalize flex gap-2 leading-8 text-[14px]">
                    {amenitiesId === item._id ? (
                      <input
                        value={amenitiesValue}
                        onChange={(e) => setAmenitiesValue(e.target.value)}
                        type="text"
                        className="border ml-2 rounded-md h-8 px-2 capitalize focus:border-black font-sans outline-none"
                      />
                    ) : (
                      item.amenities
                    )}
                  </p>
                  <div className="flex gap-2">
                    {amenitiesId === item._id ? (
                      <>
                        <FontAwesomeIcon
                          icon={faFloppyDisk}
                          onClick={() => handleEdit(item._id)}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => setAmenitiesId(null)}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDelete(item._id)}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => {
                            setAmenitiesId(item._id);
                            setAmenitiesValue(item.amenities);
                          }}
                          className="mt-2 hover:text-primary cursor-pointer"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Amenities;