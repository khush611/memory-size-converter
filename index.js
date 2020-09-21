function bitsConverter() {
    document.converter.byte.value = document.converter.bits.value / 8;
    document.converter.kb.value = (document.converter.bits.value / 8) * 1024;
    document.converter.mb.value =
      document.converter.bits.value / (8 * 1024 * 1024);
    document.converter.gb.value =
      document.converter.bits.value / (1024 * 1024 * 1024);
  }
  function byteConverter() {
    document.converter.bits.value = document.converter.byte.value * 8;
    document.converter.kb.value = document.converter.byte.value / 1024;
    document.converter.mb.value = document.converter.byte.value / (1024 * 1024);
    document.converter.gb.value =
      document.converter.byte.value / (1024 * 1024 * 1024);
  }
  
  function kbConverter() {
    document.converter.bits.value = document.converter.kb.value * (8 * 1024);
    document.converter.byte.value = document.converter.kb.value * 1024;
    document.converter.mb.value = document.converter.kb.value / 1024;
    document.converter.gb.value = document.converter.kb.value / (1024 * 1024);
  }
  
  function mbConverter() {
    document.converter.bits.value =
      document.converter.mb.value * (8 * 1024 * 1024);
    document.converter.byte.value = document.converter.mb.value * (1024 * 1024);
    document.converter.kb.value = document.converter.mb.value * 1024;
    document.converter.gb.value = document.converter.mb.value / 1024;
  }
  function gbConverter() {
    document.converter.bits.value =
      document.converter.gb.value * (8 * 1024 * 1024 * 1024);
    document.converter.byte.value =
      document.converter.gb.value * (1024 * 1024 * 1024);
    document.converter.kb.value = document.converter.gb.value * (1024 * 1024);
    document.converter.mb.value = document.converter.gb.value * 1024;
  }
  