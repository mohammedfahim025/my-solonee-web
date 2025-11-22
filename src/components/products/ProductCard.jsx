    {/* description */}

        <div className=" border-t border-gray-300 pt-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>

          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Our Luxury Twill Pant is the perfect choice for your everyday go-to,
            offering unmatched comfort and style!
          </p>

          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900 flex-shrink-0">
                •
              </span>
              <span>
                <span className="font-semibold">100% Cotton Twill</span> (GSM
                220-250) for comfort and durability
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900 flex-shrink-0">
                •
              </span>
              <span>
                <span className="font-semibold">Non-stitch design</span> ideal
                for Salat and daily wear
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900 flex-shrink-0">
                •
              </span>
              <span>
                <span className="font-semibold">Button closure</span> with
                premium stitching for a polished look
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900 flex-shrink-0">
                •
              </span>
              <span>
                <span className="font-semibold">Added ribbon</span> for a
                customizable waist fit
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-gray-900 flex-shrink-0">
                •
              </span>
              <span>
                <span className="font-semibold">Versatile style</span> for
                prayer, walks, and casual wear
              </span>
            </li>
          </ul>
        </div>


    {/* Payment Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4">
              <div className="flex justify-between border border-gray-200 gap-2 sm:gap-3">
                <div className="w-8 flex gap-2 h-8 sm:w-10 sm:h-10 ">
                  <img src={BkashLogo} alt="Bkash" className="w-4 sm:w-6 h-4 sm:h-6" />
                  <p>Bkash</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">+880 154 4444 44</p>
                </div>

                
              </div>
              <ul className="flex justify-between">
                <li>Shipping Charge</li>
                <li>BDT 0.00</li>
              </ul>
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-600">

                <span>Transaction Id</span>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-28 sm:w-36 text-center text-sm sm:text-base text-gray-600 border border-gray-300 rounded px-2 py-1"
                />
              </div>
                   <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 ">
              <div className="flex gap-3">
                <span className="text-yellow-600 text-lg">⚠</span>
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Delivery Charge Notice</p>
                  <ul className="text-xs text-yellow-800 space-y-1">
                    <li>• For payment made via bKash please note that a delivery fee applies:</li>
                    <li>• ৳70 for deliveries inside Chattogram</li>
                    <li>• ৳120 for deliveries outside Chattogram</li>
                  </ul>
                </div>
              </div>
              
            </div>
 
            </div>




  