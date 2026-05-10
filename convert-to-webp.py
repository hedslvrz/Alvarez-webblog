import os
from PIL import Image

def convert_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                file_path = os.path.join(root, file)
                name, ext = os.path.splitext(file_path)
                webp_path = name + ".webp"
                
                try:
                    with Image.open(file_path) as img:
                        img.save(webp_path, "WEBP", quality=80)
                    print(f"Converted: {file_path} -> {webp_path}")
                    os.remove(file_path)
                    print(f"Removed original: {file_path}")
                except Exception as e:
                    print(f"Failed to convert {file_path}: {e}")

if __name__ == "__main__":
    photos_dir = "photos"
    if os.path.exists(photos_dir):
        convert_to_webp(photos_dir)
    else:
        print(f"Directory {photos_dir} does not exist.")
