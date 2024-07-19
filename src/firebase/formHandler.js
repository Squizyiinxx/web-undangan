import { ref, set, get } from "firebase/database";
import { database } from "./firebase-config";
import Swal from "sweetalert2";


export const saveMessage = async (name, attendance, message) => {
  const messageId = new Date().getTime();
  await set(ref(database, "messages/" + messageId), {
    name: name,
    attendance: attendance,
    message: message,
  });
};

export const getMessages = async () => {
  const messagesRef = ref(database, "messages");
  const snapshot = await get(messagesRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return {};
  }
};

// Event listener untuk form submit
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get("nama");
      const attendance = formData.get("kehadiran");
      const message = formData.get("ucapan");

      await saveMessage(name, attendance, message);
      Swal.fire({
        icon: "success",
        title: "Terima kasih!",
        text: "Ucapan dan doa Anda telah terkirim.",
      }).then(() => {
        window.location.reload(); 
      });
    });
  });
}
