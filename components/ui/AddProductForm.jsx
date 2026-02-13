"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Loader2 } from "lucide-react";

const AddProductForm = ({ user }) => {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handlesubmit = async (e) => {}
    
    return (
        <>
        <form onSubmit={handlesubmit} className="w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
                <input 
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste Product Url (Amazon, Walmart, etc.)"
                className="flex-1 h-12 px-4 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                disabled={loading}
                />

                <Button 
                className="bg-orange-500 hover:bg-orange-600 h-12 px-8 gap-2"
                type="submit"
                disabled={loading}
                size="lg"
                >
                    {loading ? (
                        <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Adding...
                        </>
                    ) : (
                        "Track Price"
                    )}
                </Button>

            </div>
        </form>

        {/*Auth Modal*/}
        </>
    );
};

export default AddProductForm;