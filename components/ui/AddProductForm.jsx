"use client";

import React, { useState } from "react";

const AddProductForm = ({ user }) => {

    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    
    return (
        <form>
            <div className="flex flex-col sm:flex-row gap-2">
                <input 
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste Product Url (Amazon, Walmart, etc)"
                className="h-12 text-base"
                required
                disabled={loading}
                />

            </div>
            

        </form>
    );
};

export default AddProductForm;