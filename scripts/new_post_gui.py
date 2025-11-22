import tkinter as tk
from tkinter import messagebox
import os
import re
from datetime import datetime

# Configuration
BLOG_DIR = os.path.join(os.path.dirname(__file__), '../src/content/blogs')

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = text.strip('-')
    return text

def create_post():
    title = title_entry.get()
    content = content_text.get("1.0", tk.END).strip()

    if not title:
        messagebox.showerror("Error", "Title is required")
        return

    if not content:
        messagebox.showerror("Error", "Content is required")
        return

    slug = slugify(title)
    filename = f"{slug}.md"
    filepath = os.path.join(BLOG_DIR, filename)

    # Default values
    description = ""
    author = "Admin"
    pub_date = datetime.now().strftime("%Y-%m-%d")
    
    # Construct Frontmatter
    file_content = f"""---
title: "{title}"
description: "{description}"
author: "{author}"
pubDate: {pub_date}
---

{content}
"""

    try:
        with open(filepath, 'w') as f:
            f.write(file_content)
        
        messagebox.showinfo("Success", f"Post created successfully at:\n{filepath}")
        root.quit()
    except Exception as e:
        messagebox.showerror("Error", f"Failed to create file:\n{e}")

# GUI Setup
root = tk.Tk()
root.title("New Blog Post")

# Title
tk.Label(root, text="Post Title:").pack(pady=5)
title_entry = tk.Entry(root, width=50)
title_entry.pack(pady=5)

# Content
tk.Label(root, text="HTML Content:").pack(pady=5)
content_text = tk.Text(root, width=60, height=20)
content_text.pack(pady=5, padx=10)

# Submit Button
submit_btn = tk.Button(root, text="Create Post", command=create_post, bg="#4CAF50", fg="white")
submit_btn.pack(pady=20)

# Center window
root.update_idletasks()
width = root.winfo_width()
height = root.winfo_height()
x = (root.winfo_screenwidth() // 2) - (width // 2)
y = (root.winfo_screenheight() // 2) - (height // 2)
root.geometry(f'{width}x{height}+{x}+{y}')

root.mainloop()
