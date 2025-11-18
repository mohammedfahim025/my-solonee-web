import { useState } from 'react';
import Swal from 'sweetalert2';

export default function OrderAnimation() {
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handlePlaceOrder = () => {
    setIsOrdering(true);
    setOrderCompleted(false);
  };

  const handleCompleteOrder = () => {
    setIsOrdering(false);
    setOrderCompleted(false);
  };

  const handleAnimationEnd = () => {
    setOrderCompleted(true);
    Swal.fire({
      title: 'Parcel Delivered!',
      text: 'Completely ordered your parcel ✅',
      icon: 'success',
      confirmButtonText: 'OK',
      backdrop: true,
      allowOutsideClick: false,
      position: 'center',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          <span className="text-gray-400">ORDER</span>
          <span className="text-blue-400"> BUTTON</span>
          <span className="text-gray-400"> ANIMATION</span>
        </h1>
        <p className="text-center text-gray-500 mb-12 text-lg">
          {!isOrdering && !orderCompleted
            ? 'Click place order to start'
            : isOrdering && !orderCompleted
            ? 'Truck is on the way...'
            : 'Parcel Delivered!'}
        </p>

        {/* Animation Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-32 bg-gradient-to-b from-blue-300 to-blue-100"></div>
          <div className="relative h-40 bg-gradient-to-b from-gray-700 to-gray-800">
            <div className="absolute inset-0 flex flex-col justify-center">
              <div className="flex gap-8 px-4">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-yellow-300 rounded-full"
                    style={{ width: '40px' }}
                  ></div>
                ))}
              </div>
            </div>

            {isOrdering && !orderCompleted && (
              <div
                className="absolute top-8 transition-all duration-4000 ease-in-out"
                style={{ animation: 'driveFull 4s ease-in-out forwards' }}
                onAnimationEnd={handleAnimationEnd}
              >
                {/* Truck */}
                <div className="flex items-end gap-1 scale-150">
                  <div className="w-20 h-16 bg-blue-500 rounded-lg shadow-2xl relative border-2 border-blue-600">
                    <div className="absolute inset-2 border-2 border-blue-400 rounded-md opacity-50"></div>
                  </div>
                  <div className="w-16 h-12 bg-gray-600 rounded-t-lg shadow-2xl relative">
                    <div className="absolute top-2 left-2 w-6 h-4 bg-cyan-300 rounded-sm shadow-md"></div>
                    <div className="absolute right-3 top-2 w-0.5 h-6 bg-gray-700"></div>
                  </div>
                  <div className="w-3 h-2 bg-gray-700 rounded"></div>
                </div>

                <div className="absolute bottom-0 left-6 flex gap-12">
                  <div className="w-6 h-6 bg-gray-800 rounded-full border-3 border-gray-900 shadow-lg">
                    <div className="w-2 h-2 bg-gray-600 rounded-full m-1.5"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-800 rounded-full border-3 border-gray-900 shadow-lg">
                    <div className="w-2 h-2 bg-gray-600 rounded-full m-1.5"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-gray-800 rounded-full border-3 border-gray-900 shadow-lg">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full m-1"></div>
                </div>
              </div>
            )}
          </div>
          <style>{`
            @keyframes driveFull {
              0% { left: 16px; }
              100% { left: calc(100% - 160px); }
            }
          `}</style>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {!isOrdering && !orderCompleted && (
            <button
              onClick={handlePlaceOrder}
              className="px-8 py-3 rounded-lg font-bold text-white text-lg bg-blue-500 hover:bg-blue-600 active:scale-95 hover:scale-105 cursor-pointer transition-all duration-300"
            >
              Place Order
            </button>
          )}

          {orderCompleted && (
            <button
              onClick={handleCompleteOrder}
              className="px-8 py-3 rounded-lg font-bold text-white text-lg bg-green-500 hover:bg-green-600 active:scale-95 hover:scale-105 cursor-pointer transition-all duration-300 animate-pulse"
            >
              Complete Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
