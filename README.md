# Web Solution – Sample Websites

Portfolio + 5 sample business websites (simple HTML/CSS/JS – no build step needed).

| Folder | Sample |
|---|---|
| `/` (index.html) | Web Solution portfolio & pricing page |
| `hospital/` | Sanjeevani Multispeciality Hospital, Darbhanga |
| `hotel/` | Hotel Shree Palace & Banquet, Muzaffarpur |
| `school/` | Bright Future Public School, Purnia |
| `shop/` | Sharma Electronics, Begusarai |
| `mill/` | Mithila Agro Foods (rice/atta/poha), Madhubani |

All businesses are **fictional samples**. Every enquiry form and WhatsApp button sends to +91 81485 77174.

## Publish on GitHub Pages (free)
1. Create a free account at github.com.
2. Click **New repository** → name it `websolution` (or `yourusername.github.io` for a shorter link) → **Public** → Create.
3. Click **uploading an existing file**, drag in **all files and folders** from this zip (keep the folder structure) → **Commit changes**.
4. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`, folder `/ (root)` → **Save**.
5. Wait 1–2 minutes. Your site will be live at:
   `https://yourusername.github.io/websolution/`
   - Hospital sample: `.../websolution/hospital/`  (and same for hotel, school, shop, mill)

## Make a free sample for a real customer (15 min)
1. Copy the matching folder (e.g. `hospital/`) → rename it (e.g. `galaxy-hospital/`).
2. Open `index.html` in any text editor (VS Code / Notepad) and replace:
   - business name, address, town, phone `+91 98765 43210`, email
   - doctors / rooms / products, prices, timings
   - map: change the place name in `maps.google.com/maps?q=...`
   - colours: edit `--p` (main) and `--a` (accent) in the `<style>` line at the top
3. Upload the new folder to GitHub → send the customer the link.
4. Replace emoji tiles (`<div class="ph">🛏️</div>`) with real photos: `<img src="photo1.jpg" alt="Room">`.

## Notes
- Forms open WhatsApp with the filled details – no server needed.
- Use GitHub Pages for demos/portfolio. Host paying customers' sites on your paid hosting (Hostinger, BigRock, Netlify, Cloudflare Pages).
